import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

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

app.use('/graphiql', graphiqlExpress({ endpointURL }));

app.listen(5000, () => {
  console.log('Server is listening on port 8080'); // eslint-disable-line
});
