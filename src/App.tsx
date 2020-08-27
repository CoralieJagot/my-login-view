import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/protected" component={AboutMe} />
      </Switch>
    </Router>
  );
};

export default App;
