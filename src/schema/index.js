import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typeDefs = fileLoader(path.join(__dirname, '.'), { recursive: true });

module.exports = mergeTypes(typeDefs, { all: true });
