import Product from '../models/Product';

export default {
  Query: {
    getProduct: (_, { id }) => Product.findOne({ _id: id }),
  },
};
