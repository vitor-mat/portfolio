import React from 'react';

import { GlobalStyle } from './style/GlobalStyle'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/home/index';
import { Projects } from './pages/projects/index';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
