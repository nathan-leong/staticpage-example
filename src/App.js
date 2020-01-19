import React from 'react';
import HomePage from './pages/HomePage'
import UnderConstructionPage from './pages/UnderConstructionPage'
import { Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path='/about-us' component={UnderConstructionPage} exact/>
      <Route path='/relie-check/what-is-relie' component={UnderConstructionPage} exact/>
      <Route path='/legals' component={UnderConstructionPage} exact/>
      <Route path='/relie-check/jobs' component={UnderConstructionPage} exact/>
    </Switch>
    
  );
}

export default App;
