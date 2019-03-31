import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt';

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
};

export default mongoose.model('User', UserSchema);
