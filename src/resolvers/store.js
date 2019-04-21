import Store from '../models/Store';

export default {
  Query: {
    allStores: () => Store.find({}),
    getStore: (_, { id }) => Store.findById({ _id: id }),
    getStores: (_, { name }) => Store.find({ name }),
  },
  Mutation: {
    createStore: async (_, args) => {
      try {
        const store = await Store.create(args);
        return store;
      } catch (error) {
        throw error;
      }
    },
  },
};
