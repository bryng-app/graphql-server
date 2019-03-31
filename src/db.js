import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function connect(dbUrl, isDebug = false) {
  mongoose.set('debug', isDebug);

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
