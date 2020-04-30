import React from "react";
import Header from "../src/components/Header";
import { fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderWithRedux } from "../__mocks__/reduxMock.js";

describe("<Header />", () => {
    it("should render", () => {
        renderWithRedux(
            <Router>
              <Switch>
                <Header />
              </Switch>
            </Router>
          )
    })
    it("should go to the about page", () => {
        fireEvent.click(renderWithRedux(
          <Router>
            <Switch>
              <Header />
            </Switch>
          </Router>
        )
        .getByTestId("aboutbtn"))
        expect(window.location.pathname).toBe("/about")
    });
})