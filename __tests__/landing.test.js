import React from "react";
import App from "../src/App.js";
import Landing from "../src/components/Landing";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderWithRedux } from "../__mocks__/reduxMock.js";

describe("<App />", () => {
  describe("<Landing />", () => {
    it("should render", () => {
      renderWithRedux(
        <Router>
          <Switch>
            <Landing />
          </Switch>
        </Router>
      );
    });
    //   it('should welcome user', () => {
    //     const wrapper = rtl.render(<Landing />)
    //     expect(wrapper.getByText(/Discover/i))
    //   })
  });

  function sum(a, b) {
    return a + b;
  }

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

const questions = [
  {
    question: "Which describes your preferred work environment?",
    id: 1,
  },
  {
    question: "How do you learn?",
    id: 2,
  },
  {
    question: "What do you find more fascinating?",
    id: 3,
  },
  {
    question: "How do you problem solve?",
    id: 4,
  },
  {
    question: "When constructing a new chair...",
    id: 5,
  },
  {
    question:
      "How would you explain music to someone who's never listened to it before?",
    id: 6,
  },
  {
    question: "What describes you better?",
    id: 7,
  },
  {
    question: "What is the most appealing to you?",
    id: 8,
  },
];
