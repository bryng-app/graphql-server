import crypto from 'crypto';
import LoginToken from '../../models/auth/LoginToken';
import auth from '../../services/auth';

export default {
  Query: {
    getLoginToken: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);
        return LoginToken.findOne({ user: user._id });
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addLoginToken: async (_, args, { user }) => {
      try {
        await auth.requireAuth(user);

        const userToken = crypto.createCipher('aes-128-cbc', user._id);
        let token = userToken.update(user._id, 'utf8', 'hex');
        token += userToken.final('hex');

        await LoginToken.findOne({ user: user._id }, function (err, LoginToken) { // eslint-disable-line
          if (err) {
            return;
          }
          LoginToken.remove();
        });

        return LoginToken.create({ token, user: user._id });
      } catch (error) {
        throw error;
      }
    },
  },
};
