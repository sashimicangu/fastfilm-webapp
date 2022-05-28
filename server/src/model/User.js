import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  name: String,
  password: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  rank: String,
  dob: String
});

export default mongoose.model('User', User, 'user');
