describe("Results", () => {
  it("loads", () => {
    cy.start();
    // cy.quiz();
    cy.clickAnswer();
    cy.clickNext();
    cy.url().should("contain", "/results");
  });
  // it('Takes user back to start of quiz from Results', () => {
  // 	cy.contains('a', 'Restart').click({ force: true });
  // 	cy.url('contains', '/quiz');
  // 	cy.contains(/question 1/i);
  // });
  // it('clicks other tracks on graph', () => {
  // 	cy.quiz();
  // 	// cy.clickAnswer()
  // 	// cy.clickNext();
  // });
  it("clicks UX bar of graph to display track", () => {
    cy.get('[cy="bar-UX"]').click();
    cy.contains("UX Traits");
  });
  it("clicks Web bar of graph to display track", () => {
    cy.get('[cy="bar-Full Stack"]').click();
    cy.contains("Full Stack Traits");
  });
  it("clicks DS bar of graph to display track", () => {
    cy.get('[cy="bar-DS"]').click();
    cy.contains("DS Traits");
  });
  it("clicks IOS bar of graph to display track", () => {
    cy.get('[cy="bar-IOS"]').click();
    cy.contains("IOS Traits");
  });
  it("clicks Android bar of graph to display track", () => {
    cy.get('[cy="bar-Android"]').click();
    cy.contains("Android Traits");
  });

  it("clicks UX Link to display track", () => {
    cy.get('[cy="trackLink-UX"]').click();
    cy.contains("UX Traits");
  });
  it("clicks Web Link to display track", () => {
    cy.get('[cy="trackLink-Full Stack"]').click();
    cy.contains("Full Stack Traits");
  });
  it("clicks DS Link to display track", () => {
    cy.get('[cy="trackLink-DS"]').click();
    cy.contains("DS Traits");
  });
  it("clicks IOS Link to display track", () => {
    cy.get('[cy="trackLink-IOS"]').click();
    cy.contains("IOS Traits");
  });
  it("clicks Android Link to display track", () => {
    cy.get('[cy="trackLink-Android"]').click();
    cy.contains("Android Traits");
  });
  it("restarts quiz w/ retake btn", () => {
    cy.get('[cy="retakeBtn"]').click();
    cy.url("contains", "/quiz");
    // cy.quiz();
    cy.clickAnswer();
    cy.clickNext();
    cy.url().should("contain", "/results");
  });
  it("view courses Btn bottom", () => {
    cy.get('[cy="coursesBtnB"]').click();
    cy.url().contains("/courses");
  });
});
