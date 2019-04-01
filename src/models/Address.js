import mongoose, { Schema } from 'mongoose';

const AddressSchema = new Schema({
  country: String,
  city: String,
  street: String,
  streetExtra: String,
  zipCode: Number,
});

export default mongoose.model('Address', AddressSchema);
