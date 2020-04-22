const { add, sub, mul, div } = require("../src/calc");

describe("Calculator", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("subtracts 2 numbers", () => {
    expect(sub(9, 3)).toBe(6);
  });
  it("divides 2 numbers", () => {
    expect(div(50, 25)).toBe(2);
  });
  it("multiplies 2 numbers", () => {
    expect(mul(10, 25)).toBe(250);
  });
});
