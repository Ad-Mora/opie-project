import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar-container'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/'>Conduct Test</Link>
        <Link className='nav-link' to='/'>View Records</Link>
      </div>
    );
  }
}
