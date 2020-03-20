import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Landing from "./components/Landing";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Switch>
    </div>
  );
}

export default App;
