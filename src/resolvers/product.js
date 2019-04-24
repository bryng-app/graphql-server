import Product from '../models/Product';

export default {
  Query: {
    getProducts: async (_, { storeName, categoryName }) => {
      Product.find({ storeName, categoryName });
    },
  },
};
