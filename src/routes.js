import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import RegisterPage from './components/Register/RegisterPage';

export default(
  <Route path="/" component={App}>.
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="register" component={RegisterPage} />
  </Route>
);
