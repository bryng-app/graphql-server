import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolvers = fileLoader(path.join(__dirname, '.'), { recursive: true });

module.exports = mergeResolvers(resolvers, { all: true });
