import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  fullname: String,
  email: String,
  username: String,
  phoneNumber: String,
  age: Number,
});

export default mongoose.model('User', UserSchema);
