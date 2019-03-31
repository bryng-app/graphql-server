import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

require('dotenv').config();
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './resolvers')),
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const endpointURL = '/graphql';

app.use(endpointURL, bodyParser.json(), graphqlExpress({ schema }));

if (!IS_PRODUCTION) {
  app.use('/graphiql', graphiqlExpress({ endpointURL }));
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`); // eslint-disable-line
});
