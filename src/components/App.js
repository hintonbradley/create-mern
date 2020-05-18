import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Intro from './Intro';
import Setup from './Setup';
import GoogleAuth from './GoogleAuth';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
          <Switch>
            <Home  path="/" exact component={Home} />
            <Route path="/intro" component={Intro} />
            <Route path="/setup" component={Setup} />
            <Route path="/google-auth" component={GoogleAuth} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;