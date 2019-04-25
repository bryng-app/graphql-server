import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import dotenv from 'dotenv';
import db from './db';
import auth from './services/auth';
import typeDefs from './schema';
import resolvers from './resolvers';
// import mocks from './mocks';

dotenv.config();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_TEST = process.env.NODE_ENV === 'test';
const PORT = process.env.PORT || 8080;

db.connect(`${process.env.DB_URL}${IS_TEST ? process.env.TEST_DB : process.env.REAL_DB}`, !IS_PRODUCTION);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const endpointURL = '/graphql';

app.use(cors());

app.use(auth.auth);

app.use(endpointURL, bodyParser.json(), graphqlExpress(req => ({
  schema,
  context: {
    user: req.user,
  },
})));

if (!IS_PRODUCTION) {
  app.use('/graphiql', graphiqlExpress({ endpointURL }));
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`); // eslint-disable-line
});

/*
mocks().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); // eslint-disable-line
  });
});
*/
