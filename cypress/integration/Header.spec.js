describe('Header', () => {
	it('Landing contains header', () => {
		cy.visit('/');
		cy.url('contains', '/');
		cy.get('nav');
	});

	it('Navigates to About', () => {
		cy.get('a[href="/about"]').contains('About').click({ force: true });
		cy.url('contains', '/about');
	});

	it('Click hat back to home', () => {
		cy.get('.mr-6').click({ force: true });
		cy.url('contains', '/');
	});

	it('click start quiz', () => {
		cy.contains('a', 'Take Quiz').click({ force: true });
		cy.url('contains', '/quiz');
	});

	it('Quiz contains header', () => {
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

	//
});
