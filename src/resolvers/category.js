import Category from '../models/Category';

export default {
  Query: {
    allCategories: () => Category.find({}),
    getCategory: (_, { name }) => Category.find({ name }),
  },
};
