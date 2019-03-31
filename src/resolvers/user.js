import User from '../models/User';

export default {
  Query: {
    allUsers: () => User.find({}),
  },
  Mutation: {
    createUser: (_, args) => User.create(args),
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user || !user.authenticateUser(password)) {
        throw new Error('User or password is incorrect!');
      }

      return user;
    },
  },
};
