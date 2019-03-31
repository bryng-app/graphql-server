import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  fullname: String,
});

export default mongoose.model('User', UserSchema);
