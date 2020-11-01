import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './layouts/Home';
import ChordFinder from './layouts/ChordFinder';
import Quiz from './layouts/Quiz';
import NotFound from './layouts/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/chordFinder">
            <ChordFinder />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
