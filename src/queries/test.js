const { GraphQLID, GraphQLNonNull } = require('graphql');
const TestType = require('../types/test');

module.exports = {
  type: TestType,
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
        name: 'Testing Name',
        date: 'Today',
      });
    });
  },
};
