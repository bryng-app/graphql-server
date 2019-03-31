import User from '../models/User';

export default {
  Query: {
    allUsers: () => User.find({}),
  },
  Mutation: {
    createUser: (parent, args, context) => ({
      args,
    }),
  },
};
