const sub = (a, b) => a - b;

it("subtracts 10 - 5", () => {
  expect(sub(10, 5)).to.equal(5);
});
