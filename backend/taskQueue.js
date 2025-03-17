const { pipeline } = require('@huggingface/transformers');

const nlp = pipeline('zero-shot-classification', 'xlm-roberta-large');

async function processTask(task) {
  const labels = ['send_text', 'schedule_meeting', 'custom_api'];
  const result = await nlp(task, labels);
  const intent = result.labels[result.scores.indexOf(Math.max(...result.scores))];
  console.log(`Detected intent: ${intent}`);
  return intent;
}

module.exports = { processTask };