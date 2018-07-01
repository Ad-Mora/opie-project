const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost:27017/opie';
mongoose.promise = global.Promise;

// Establish mongoose connection
const connection = mongoose.connect(mongooseURI);
connection.then(
  () => console.log('connected to mongodb'),
  err => console.log(`mongoose connection error: ${err}`)
);

// Initialize models
require('./models/PatientModel');
