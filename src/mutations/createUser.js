const { GraphQLNonNull } = require('graphql');
const UserType = require('../types/user');
const UserInputType = require('../types/input/user');

module.exports = {
  type: UserType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve: (root, { data }) => {
    return new Promise((resolve, reject) => {
      resolve({
        id: 'myfreakingawesomeid',
        ...data,
      });
    });
  },
};
