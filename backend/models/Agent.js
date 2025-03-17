const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  task: String,
  status: { type: String, default: 'pending' },
  coordinates: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model('Agent', agentSchema);