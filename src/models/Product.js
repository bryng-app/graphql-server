import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  weight: String,
  storeName: String,
  categoryName: String,
});

export default mongoose.model('Product', ProductSchema);
