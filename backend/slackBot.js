const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_TOKEN);
const Agent = require('./models/Agent');
const { addTaskToQueue } = require('./taskQueue');

async function createAgentFromSlack(task, userId) {
  const agent = new Agent({ task, userId });
  await agent.save();
  await addTaskToQueue(agent._id, task);
  await web.chat.postMessage({
    text: 'Agent created successfully!',
    channel: 'general',
  });
}

module.exports = { createAgentFromSlack }; 
