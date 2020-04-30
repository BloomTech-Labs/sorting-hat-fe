import React from "react";
import Quiz from "../src/components/Quiz";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderWithRedux } from "../__mocks__/reduxMock.js";

describe("<Quiz />", () => {
    it("should render", () => {
        renderWithRedux(
          <Router>
            <Switch>
              <Quiz />
            </Switch>
          </Router>
        )
    });
})