import mongoose, { Schema } from 'mongoose';

const AddressSchema = new Schema({
  country: String,
  city: String,
  street: String,
  streetExtra: String,
  zipCode: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

export default mongoose.model('Address', AddressSchema);
