const { GraphQLID, GraphQLNonNull } = require('graphql');
const UserType = require('../types/user');

module.exports = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      resolve({
        id: 'testingId',
        fullname: 'Florian Woelki',
        email: 'florianwoelki@gmx.de',
        username: 'florianwoelki',
        phoneNumber: '01515 8364185',
        age: 20,
      });
    });
  },
};
