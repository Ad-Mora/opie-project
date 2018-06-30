import React from 'react';
import NavBar from './NavBar';

export default class RecordsPage extends React.Component {
  render () {
    return (
      <div className='records-page-container'>
        <NavBar />
        <h1>This is the records page</h1>
      </div>
    );
  }
}
