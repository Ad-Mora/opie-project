import React from 'react';
import NavBar from './NavBar';
import '../styles/welcome.scss';
import { Link } from 'react-router-dom';

export default class WelcomePage extends React.Component {
  render () {
    return (
      <div className='welcome-page-container'>
        <NavBar />
        <h1 className='welcome-header'>Welcome to OPIE!</h1>
        <Link to='/walk-test' className='option-button'>Conduct a new test</Link>
        <Link to='/records' className='option-button'>View patient records</Link>
      </div>
    );
  }
}
