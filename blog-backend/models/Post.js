import { Schema, model } from 'mongoose';

const loginInfo = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dateJoined: {type: Date, default: Date.now },
});

const postInfo = new Schema({
    username: { type: String, required: true },
    post_body: { type: String, required: true },
    datePosted: {type: Date, default: Date.now},
    timePost: {type: Timestamp, default: Timestamp.now} 
});

export default model('post', postInfo);