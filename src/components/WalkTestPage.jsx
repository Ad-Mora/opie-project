import React from 'react';
import NavBar from './NavBar';

export default class WalkTestPage extends React.Component {
  render () {
    return (
      <div className='walk-test-page-container'>
        <NavBar />
        <h1>This is the walk test page</h1>
      </div>
    );
  }
}
