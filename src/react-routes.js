import React from 'react';
import ReactDom from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import './styles/css-reset.scss';

const rootRoute = (
  <BrowserRouter>
    <Route name='welcome' path='/' component={WelcomePage} />
  </BrowserRouter>
);

ReactDom.render(rootRoute, document.getElementById('app-container'));
