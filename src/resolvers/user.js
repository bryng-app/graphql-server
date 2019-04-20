import User from '../models/User';
import LoginToken from '../models/LoginToken';
import auth from '../services/auth';

export default {
  Query: {
    allUsers: () => User.find({}),
    getUser: (_, { id }) => User.findById({ _id: id }),
    me: async (_, args, { user }) => {
      try {
        const me = await auth.requireAuth(user);
        return me;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        const user = await User.create(args);
        return {
          token: user.createToken(),
        };
      } catch (error) {
        throw error;
      }
    },
    login: async (_, { email, password }) => {
      try {
        const emailString = email.toLowerCase();
        const user = await User.findOne({ email: emailString });

        if (!user || !user.authenticateUser(password)) {
          throw new Error('User or password is incorrect!');
        }

        return {
          token: user.createToken(),
        };
      } catch (error) {
        throw error;
      }
    },
    getJWTToken: async (_, { loginToken }) => {
      try {
        const userLoginToken = await LoginToken.findOne({ token: loginToken });
        const user = await User.findById({ _id: userLoginToken.user });

        if (!user) {
          throw new Error('Token is incorrect!');
        }

        return {
          token: user.createToken(),
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
