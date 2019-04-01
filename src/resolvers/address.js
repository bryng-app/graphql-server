import Address from '../models/Address';
import auth from '../services/auth';

export default {
  Query: {
    getAddress: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return Address.findOne({ user: user._id });
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addAddress: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return Address.create({ ...args, user: user._id });
      } catch (error) {
        throw error;
      }
    },
  },
};
