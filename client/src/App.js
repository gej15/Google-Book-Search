import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search.js";
import Results from "./pages/Results/Results.js";
import Saved from "./pages/Saved/Saved.js";
import NoMatch from "./pages/NoMatch/NoMatch.js";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;