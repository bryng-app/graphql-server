import mongoose, { Schema } from 'mongoose';

const LocationSchema = new Schema({
  location: {
    latitude: Number,
    longitude: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

export default mongoose.model('Location', LocationSchema);
