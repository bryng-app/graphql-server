import Location from '../../models/user/Location';
import auth from '../../services/auth';

export default {
  Query: {
    getLatestLocation: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return Location.findOne({}, {}, { sort: { createdAt: -1 } });
      } catch (error) {
        throw error;
      }
    },
    getAllLocations: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return Location.find({ user: user._id });
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addLocation: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return Location.create({ ...args, user: user._id });
      } catch (error) {
        throw error;
      }
    },
  },
};
