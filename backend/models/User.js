const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // In production, hash with bcrypt
  role: { type: String, default: 'user' },
});

module.exports = mongoose.model('User', userSchema); 
