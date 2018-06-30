import React from 'react';
import NavBar from './NavBar';
import '../styles/walk-test.scss';

export default class WalkTestPage extends React.Component {
  render () {
    return (
      <div className='walk-test-page-container'>
        <NavBar />
        <h1 className='walk-test-header'>Timed 10-Meter Walk Test</h1>
        <div className='input-block'>
          <span className='input-label'>Datudfasdfasm 1 <input className='data-input' /></span>
          <span className='input-label'>Datum 2 <input className='data-input' /></span>
          <span className='input-label'>Datudsfm 3 <input className='data-input' /></span>
        </div>
        <div className='button-block'>
          <button className='form-button'>Submit</button>
          <button className='form-button'>New Patient</button>
        </div>
        <p className='summary-heading'>Results Summary</p>
        <p className='summary'>
          This is a test summary. I don't know what else will go here.
          This is a test summary. I don't know what else will go here.
          This is a test summary. I don't know what else will go here.
          This is a test summary. I don't know what else will go here.
          This is a test summary. I don't know what else will go here.
        </p>
      </div>
    );
  }
}
