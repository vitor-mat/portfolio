import React from 'react';

import { GlobalStyle } from './style/GlobalStyle'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
          <GlobalStyle/>
          <Switch>
            <Route exact path="/">
              <h1>Ola mundo</h1>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
