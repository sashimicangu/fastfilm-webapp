import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Category = new Schema({
  id: String,
  name: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export default mongoose.model('Category', Category, 'category');
