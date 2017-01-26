import React from 'react';
import {render} from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Repos from './components/Repos.jsx';

render(
  <Router history={hashHistory}>
    <Route path="/" components={Home}/>
      <Route path="/about" components={About}/>
      <Route path="/repos" components={Repos}/>
      
  </Router>
  , document.getElementById('app'))