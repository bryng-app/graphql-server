import Category from '../models/Category';
import Product from '../models/Product';

export default {
  Query: {
    allCategories: () => Category.find({}),
    getCategory: (_, { name }) => Category.find({ name }),
    getProducts: (_, { name }) => Product.find({ categoryName: name }),
  },
};
