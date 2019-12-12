import React from 'react';
import './App.css';
import unit1 from './unit1.js';
import unit2 from './unit2.js';
import menuheader from './menuheader.js';
import { HashRouter, Route } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <HashRouter basename='/'>
        <Route path='/' component={menuheader} />
        <Route exact path='/unit-1' component={unit1}  />
        <Route exact path='/unit-2' component={unit2}  />
      </HashRouter>
    );
  }
}

export default App;
