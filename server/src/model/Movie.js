import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Movie = new Schema({
  name: String,
  subtitle: String,
  release: String,
  author: String,
  region: String,
  type: String,
  premiere: Date,
  image: String,
  cover: String,
  description: String,
  trailer: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export default mongoose.model('Movie', Movie, 'movie');
