describe('Results', () => {
	it('loads', () => {
		cy.start();
		cy.quiz();
	});
	it('Takes user back to start of quiz from Results', () => {
		cy.contains('a', 'Restart').click({ force: true });
		cy.url('contains', '/quiz');
		cy.contains(/question 1/i);
	});
	it('clicks other tracks on graph', () => {
		cy.quiz();
		// cy.clickAnswer()
		// cy.clickNext();
	});
	it('clicks on bar of graph to display track', () => {
		cy.get(':nth-child(4) > .flex-col-reverse > .h-56').click();
		cy.contains('IOS Traits');
	});
});
