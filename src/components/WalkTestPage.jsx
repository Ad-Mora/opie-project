import React from 'react';
import '../styles/walk-test.scss';
import axios from 'axios';

export default class WalkTestPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      submitted: false,
      errorMsg: '',
      summary: ''
    };

    this.clearError = this.clearError.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.clearPatient = this.clearPatient.bind(this);
    this.invalidFormErrorMsg = 'Please enter appropriate values for all above fields before submitting';
    this.alreadySubmittedErrorMsg = 'You have already submitted a record for this patient';
    this.errorSavingRecordMsg = 'Error saving record to database';
  }

  compileSummary (firstName, lastName, trialOne, trialTwo, trialThree) {
    let avgTime = (trialOne + trialTwo + trialThree) / 3;
    avgTime = avgTime.toFixed(2);
    let speed = avgTime / 10;
    speed = speed.toFixed(2);
    const name = firstName + ' ' + lastName;

    return `${name} walked a distance of 10 meters in ${avgTime} seconds. This is a rate of ${speed} meters per second.`;
  }

  clearError () {
    this.setState({errorMsg: ''});
  }

  clearPatient () {
    // clear all fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('trial1').value = '';
    document.getElementById('trial2').value = '';
    document.getElementById('trial3').value = '';

    this.setState({
      submitted: false,
      summary: '',
      errorMsg: ''
    });
  }

  submitInfo () {
    // can only submit once per patient
    if (this.state.submitted) {
      this.setState({ errorMsg: this.alreadySubmittedErrorMsg });
      return;
    }

    // gather together all input data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    let trialOne = document.getElementById('trial1').value;
    let trialTwo = document.getElementById('trial2').value;
    let trialThree = document.getElementById('trial3').value;

    // check if submission is valid and all fields are filled in
    const isFilledIn = firstName !== '' && lastName !== '' && trialOne !== '' && trialTwo !== '' && trialThree !== '';

    // cast trial times to numbers
    trialOne = Number(trialOne);
    trialTwo = Number(trialTwo);
    trialThree = Number(trialThree);

    const isValid = isFilledIn && !isNaN(trialOne) && !isNaN(trialTwo) && !isNaN(trialThree);

    if (isValid) {
      const summary = this.compileSummary(firstName, lastName, trialOne, trialTwo, trialThree);

      axios.post('/api/patients', { firstName, lastName, record: summary })
        .then(response => {
          this.setState({
            summary,
            submitted: true
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ errorMsg: this.errorSavingRecordMsg });
        });
    } else {
      this.setState({ errorMsg: this.invalidFormErrorMsg });
    }
  }

  render () {
    return (
      <div className='walk-test-page-container'>
        <h1 className='walk-test-header'>Timed 10-Meter Walk Test</h1>
        <div className='input-block'>
          <span className='input-label'>First name: <input id='firstName' className='data-input' onChange={this.clearError} /></span>
          <span className='input-label'>Last name: <input id='lastName' className='data-input' onChange={this.clearError} /></span>
          <span className='input-label'>Trial 1 time (s): <input id='trial1' className='data-input' onChange={this.clearError} /></span>
          <span className='input-label'>Trial 2 time (s): <input id='trial2' className='data-input' onChange={this.clearError} /></span>
          <span className='input-label'>Trial 3 time (s): <input id='trial3' className='data-input' onChange={this.clearError} /></span>
        </div>

        { this.state.errorMsg !== '' &&
          <p className='error-msg'>{this.state.errorMsg}</p>
        }

        <div className='button-block'>
          <button className='form-button' onClick={this.submitInfo}>Submit</button>
          <button className='form-button' onClick={this.clearPatient}>New Patient</button>
        </div>

        { this.state.summary !== '' &&
          <div>
            <p className='summary-heading'>Results Summary</p>
            <p className='summary'>{this.state.summary}</p>
            <p className='confirmation-text'>This record has been successfully saved to our database.</p>
          </div>
        }
      </div>
    );
  }
}
