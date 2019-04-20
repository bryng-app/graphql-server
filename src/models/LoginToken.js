import mongoose, { Schema } from 'mongoose';

const LoginTokenSchema = new Schema({
  token: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

export default mongoose.model('LoginToken', LoginTokenSchema);
