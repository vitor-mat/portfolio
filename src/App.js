import React from 'react';

import { GlobalStyle } from './style/GlobalStyle'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/home/index';

function App() {
  return (
    <Router>
          <GlobalStyle/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
