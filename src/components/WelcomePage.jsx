import React from 'react';
import NavBar from './NavBar';

export default class WelcomePage extends React.Component {
  render () {
    return (
      <div className='welcome-page-container'>
        <NavBar />
        {/* <h1 className='welcome-header'>Welcome to OPIE!</h1>
        <p className='subtext'>Would you like to conduct a new test, or view existing patients?</p>
        <button className='option-button'>Conduct a new test</button>
        <button className='option-button'>View patient records</button> */}
      </div>
    );
  }
}
