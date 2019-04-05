import mongoose, { Schema } from 'mongoose';

const StoreSchema = new Schema({
  name: String,
  openingHours: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
}, { timestamps: true });

export default mongoose.model('Store', StoreSchema);
