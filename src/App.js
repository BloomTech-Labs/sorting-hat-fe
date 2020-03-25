import React from "react";
import "./styles/app.css";
import { Switch, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Landing from "./components/Landing";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Switch>
    </div>
  );
}

export default App;
