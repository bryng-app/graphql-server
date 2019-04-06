import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.JWT_SECRET;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    fullname: String,
    password: String,
    age: Number,
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', function (next) { // eslint-disable-line
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  hashPassword(password) {
    return hashSync(password, 12);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      secret,
    );
  },
};

export default mongoose.model('User', UserSchema);
