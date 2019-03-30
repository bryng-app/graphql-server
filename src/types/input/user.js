const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    fullname: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phoneNumber: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
