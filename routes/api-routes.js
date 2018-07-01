const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PatientModel = mongoose.model('Patient');

// find patients matching the request query
router.get('/patients', async (req, res) => {
  const name = req.query.name;
  const names = name.split(' ');
  let query = null;

  // all queries are case insensitive
  if (names.length === 1) {
    // find first names that start with the current query
    const regExp = new RegExp('^' + names[0], 'i');
    query = { firstName: regExp };
  } else if (names.length === 2) {
    // find names that match the first name, and start with the second name in the query
    const firstNameRegExp = new RegExp('^' + names[0] + '$', 'i');
    const lastNameRegExp = new RegExp('^' + names[1], 'i');

    query = { firstName: firstNameRegExp, lastName: lastNameRegExp };
  } else {
    // a proper request will have either one or two names in the query (first and last)
    return res.status(400).json({ message: 'Improper request for patient record' });
  }

  PatientModel.find(query).limit(5).exec()
    .then(patients => {
      res.status(200).json({
        message: 'Found patients!',
        patients
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({message: `Error finding patients: ${err}`});
    });
});

// add a patient record to the database
router.post('/patients', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const record = req.body.record;

  const patientData = { firstName, lastName, record };

  PatientModel.create(patientData)
    .then(patient => res.status(200).json({ message: 'Successfully created patient record' }))
    .catch(err => {
      console.log(err);
      return res.status(500).json({ message: `Error creating patient record: ${err}` });
    });
});

module.exports = router;
