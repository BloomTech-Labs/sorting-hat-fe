// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// takes the entire quiz
Cypress.Commands.add("quiz", () => {
  for (let i = 1; i <= 8; i++) {
    cy.contains(`Question ${i}`);
    cy.clickAnswer();
    cy.clickNext();
    cy.getStore();
  }
});

Cypress.Commands.add("start", () => {
  cy.visit("/");
  cy.get('[cy="startBtn"]')
    .contains(/start quiz/i)
    .click();
});

Cypress.Commands.add("clickAnswer", () => {
  cy.get(":nth-child(3) > .fira-sans").click();
});

Cypress.Commands.add("clickNext", () => {
  cy.get("[cy='nextBtn']").click();
});

Cypress.Commands.add("clickBack", () => {
  cy.get(".border-2").click();
});

Cypress.Commands.add("getStore", () => {
  cy.window()
    .its("store")
    .invoke("getState")
    .then((store) => console.log(store));
});
