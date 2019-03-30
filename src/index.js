require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
let schema = require('./schema');

const server = express();

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

server.use('/login', (req, res) => {
  res.json({
    id: 1,
    username: 'admin',
    jwt: jwt.sign(
      {
        id: 1,
        username: 'admin',
      },
      'testest',
      { expiresIn: 60 * 60 },
    ),
  });
});

server.use(
  '/graphql',
  expressJwt({ secret: 'testest' }),
  graphqlHTTP((req, res, gql) => ({
    schema,
    graphiql: dev,
    pretty: dev,
  })),
);

server.listen(PORT, error => {
  if (error) throw error;

  console.log(`> Ready on Port ${PORT}`);
});
