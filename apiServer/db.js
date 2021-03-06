import mongoose from 'mongoose';
export default (config,callback) => {
  const dbURI = `mongodb://${config.database.hostname}:${config.database.port}/${config.database.name}`;
  mongoose.connect(dbURI);
  // CONNECTION EVENTS
// When successfully connected
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
  });

// If the connection throws an error
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

// When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });
  callback(mongoose);
}
