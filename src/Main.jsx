import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import WalkTestPage from './components/WalkTestPage';
import RecordsPage from './components/RecordsPage';
import NavBar from './components/NavBar';
import './styles/default-styles.scss';
import './styles/css-reset.scss';

// pass in the current location into the nav bar
const NavBarLocation = withRouter(props => <NavBar location={props.location.pathname} />);

const rootRoute = (
  <BrowserRouter>
    <div className='default-container'>
      <NavBarLocation />
      <Route exact name='welcome' path='/' component={WelcomePage} />
      <Route name='walk-test' path='/walk-test' component={WalkTestPage} />
      <Route name='records' path='/records' component={RecordsPage} />
    </div>
  </BrowserRouter>
);

ReactDom.render(rootRoute, document.getElementById('app-container'));
