export default {
  Query: {
    getUser: (parent, args, context) => ({
      id: 'testid',
      fullname: 'florian woelki',
      email: 'florianwoelki@gmx.de',
      username: 'florianwoelki',
      phoneNumber: '01515 8364185',
      age: 20,
    }),
  },
  Mutation: {
    createUser: (parent, args, context) => ({
      args,
    }),
  },
};
