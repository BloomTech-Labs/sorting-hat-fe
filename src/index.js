import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
//* REDUX
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/reducer";
//* REDUX MIDDLEWARE
import thunk from "redux-thunk";
// import logger from "redux-logger";
const trackingId = "UA-164378897-1"; // Replace with your Google Analytics tracking ID
const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (window.Cypress) {
  window.store = store;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
