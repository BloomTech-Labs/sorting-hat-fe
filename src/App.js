import React from "react";
import "./styles/app.css";
import { NavLink, Switch, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Landing from "./components/Landing";
import Results from "./components/Results";
import Header from "./components/Header";
import ParticleTesting from "./components/ParticleTesting";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
        <Route path="/particles" component={ParticleTesting} />
      </Switch>
    </div>
  );
}

export default App;
