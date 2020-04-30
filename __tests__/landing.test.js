import React from "react";
import Landing from "../src/components/Landing";
import { fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderWithRedux } from "../__mocks__/reduxMock.js";

jest.mock("../src/components/ParticleTesting", () => () => (
  <div>Hello World</div>
));

describe("<Landing />", () => {
  it("should render", () => {
    renderWithRedux(
      <Router>
        <Switch>
          <Landing />
        </Switch>
      </Router>
    )
  });
  it("should have h2 content", () => {
    expect(renderWithRedux(
      <Router>
        <Switch>
          <Landing />
        </Switch>
      </Router>
    )
    .getByText("Discover the Tech Career for You"))
  });
  it("should start the quiz", () => {
    fireEvent.click(renderWithRedux(
      <Router>
        <Switch>
          <Landing />
        </Switch>
      </Router>
    )
    .getByTestId("startBtn"))
    expect(window.location.pathname).toBe("/quiz")
  });
});

function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});