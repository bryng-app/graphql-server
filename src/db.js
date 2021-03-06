import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function connect(dbUrl, isDebug = false) {
  mongoose.set('debug', isDebug);

  mongoose
    .connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
      console.log(`MongoDB running (db:${dbUrl})`); // eslint-disable-line
    })
    .catch((err) => {
      console.log(`Not connected to MongoDB! Error: ${err}`); // eslint-disable-line
    });
}

function disconnect() {
  mongoose.connection.close();
}

module.exports = {
  connect,
  disconnect,
};
