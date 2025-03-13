const { pipeline } = require('@huggingface/transformers');
const redis = require('redis');
const twilio = require('twilio');
const Agent = require('./models/Agent');
const CustomAPI = require('./models/CustomAPI');

const nlp = pipeline('zero-shot-classification', 'facebook/bart-large-mnli');
const redisClient = redis.createClient();

async function parseTask(task) {
  const labels = ['weather', 'send_text', 'schedule', 'custom'];
  const result = await nlp(task, labels);
  return result.labels[0];
}

async function addTaskToQueue(agentId, task) {
  const agent = await Agent.findById(agentId);
  const intent = await parseTask(task);

  try {
    if (intent === 'send_text') {
      const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
      const [_, phone, message] = task.match(/send text to (\+[\d]+) with (.+)/i) || [];
      if (phone && message) {
        await client.messages.create({
          body: message,
          from: process.env.TWILIO_NUMBER,
          to: phone,
        });
        agent.result = `Sent SMS to ${phone}: ${message}`;
      } else {
        throw new Error('Invalid SMS format');
      }
    } else if (intent === 'schedule') {
      agent.result = 'Scheduled event (Google Calendar placeholder)';
    } else if (intent === 'custom') {
      const customAPI = await CustomAPI.findOne({ userId: agent.userId });
      if (customAPI) {
        agent.result = `Custom API called: ${customAPI.endpoint}`;
      }
    } else {
      agent.result = 'Task processed (generic)';
    }
    agent.status = 'Completed';
  } catch (error) {
    agent.status = 'Failed';
    agent.result = `Error: ${error.message}`;
  }

  await agent.save();

  if (agent.followUpTask) {
    const newAgent = new Agent({ task: agent.followUpTask, userId: agent.userId });
    await newAgent.save();
    await addTaskToQueue(newAgent._id, newAgent.task);
  }
}

module.exports = { addTaskToQueue }; 
