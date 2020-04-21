import { add, sub, div, mul } from "../../src/calc";

describe("calculator", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
  it("subtracts 2 numbers", () => {
    expect(sub(9, 3)).to.equal(6);
  });
  it("divides 2 numbers", () => {
    expect(div(50, 25)).to.equal(2);
  });
  it("multiplies 2 numbers", () => {
    expect(mul(10, 25)).to.equal(250);
  });
});
