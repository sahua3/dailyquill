import { Schema, model } from 'mongoose';

const loginInfo = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dateJoined: {type: Date, default: Date.now },
});

export default model('login', loginInfo);