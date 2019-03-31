import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

function connect(dbUrl) {
  mongoose
    .connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
      console.log('MongoDB running'); // eslint-disable-line
    })
    .catch((err) => {
      console.log(`Not connected to MongoDB! Error: ${err}`); // eslint-disable-line
    });
}

module.exports = {
  connect,
};
