/* eslint-disable no-undef */
// todo test component state (selected answer), useState as well???

describe("redux Quiz", () => {
  it("loads", () => {
    cy.visit("/");
    cy.contains("h2", "Discover the Tech Career for You");
    cy.getStore();
  });
  it("receives initial state from server", () => {
    cy.window()
      .its("store")
      .invoke("getState")
      .its("questions")
      .should("have.length", 8);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("answers")
      .should("have.length", 32);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("tracks")
      .should("have.length", 5);
    cy.window()
      .its("store")
      .invoke("getState")
      .its("points")
      .should("have.length", 160);
  });
});
