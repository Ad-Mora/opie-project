const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  record: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('Patient', PatientSchema);
