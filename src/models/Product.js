import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  weight: String,
  // TODO: Fix store and category name to real objects
  storeName: String,
  categoryName: String,
});

export default mongoose.model('Product', ProductSchema);
