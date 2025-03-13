const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  task: String,
  status: { type: String, default: 'Pending' },
  result: String,
  followUpTask: String,
  feedback: String,
  userId: String,
  x: Number,
  y: Number,
  z: Number,
});

module.exports = mongoose.model('Agent', agentSchema); 
