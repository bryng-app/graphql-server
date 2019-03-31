require('dotenv').config();
require('@babel/polyfill'); // eslint-disable-line
const mongoose = require('mongoose');

beforeEach(async (done) => {
  await mongoose
    .connect(`${process.env.DB_URL}${process.env.TEST_DB}`, {
      useNewUrlParser: true,
    })
    .then(() => {
      mongoose.connection.db.dropDatabase();
      done();
    });
});

afterEach(async (done) => {
  await mongoose.connection.close();
  return done();
});

afterAll(done => done());
