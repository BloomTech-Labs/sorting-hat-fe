import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Landing } from "../src/components/Landing";

afterEach(rtl.cleanup);

describe("<Landing />", () => {
  it("renders without crashing", () => {
    const wrapper = rtl.render(<Landing />);
    wrapper.getByText(/about/i);
  });

  // it("start Btn has 'Start Quiz'", () => {
  //   const { getByText } = rtl.render(<Landing />);
  //   expect(getByText(/start quiz/i)).toHaveTextContent(/start quiz/i);
  // });
});
