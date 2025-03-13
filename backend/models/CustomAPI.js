const mongoose = require('mongoose');

const customAPISchema = new mongoose.Schema({
  userId: String,
  endpoint: String,
  method: String,
  headers: Object,
  body: Object,
});

module.exports = mongoose.model('CustomAPI', customAPISchema); 
