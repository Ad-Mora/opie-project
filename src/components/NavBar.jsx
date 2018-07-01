import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor (props) {
    super(props);

    this.homeURL = '/';
    this.testURL = '/walk-test';
    this.recordsURL = '/records';
  }
  render () {
    const location = this.props.location;
    const homeTabClasses = 'nav-link ' + (location === this.homeURL && 'current-tab');
    const testTabClasses = 'nav-link ' + (location === this.testURL && 'current-tab');
    const recordsTabClasses = 'nav-link ' + (location === this.recordsURL && 'current-tab');

    return (
      <div className='navbar-container'>
        <Link className={homeTabClasses} to={this.homeURL}>Home</Link>
        <Link className={testTabClasses} to={this.testURL}>Conduct Test</Link>
        <Link className={recordsTabClasses} to={this.recordsURL}>View Records</Link>
      </div>
    );
  }
}
