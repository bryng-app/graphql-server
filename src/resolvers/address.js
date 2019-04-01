import Address from '../models/Address';
import auth from '../services/auth';

export default {
  Mutation: {
    // TODO: Add protection.. should be only available for this user id!
    addAddress: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return Address.create(args);
      } catch (error) {
        throw error;
      }
    },
  },
};
