describe('Header', () => {
	it('Landing contains header', () => {
		cy.visit('/');
		cy.url('contains', '/');
		cy.get('nav');
	});
	it('Quiz contains header', () => {
		cy.start();
		cy.url('contains', '/quiz');
		for (let i = 1; i <= 8; i++) {
			cy.contains(`Question ${i}`);
			cy.get('nav');
			cy.clickAnswer();
			cy.clickNext();
		}
	});
	it('Results contains header', () => {
		cy.url('contains', '/results');
		cy.get('nav');
	});
});
