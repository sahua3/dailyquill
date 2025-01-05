const mongoose = require('mongoose');

const loginInfo = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now },
});

module.exports = mongoose.model('login', loginInfo);