import mongoose, { Schema } from 'mongoose';

const StoreSchema = new Schema({
  name: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
}, { timestamps: true });

export default mongoose.model('Store', StoreSchema);
