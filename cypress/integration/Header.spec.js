describe('Header', () => {
	it('Landing contains header', () => {
		cy.visit('/');
		cy.url('contains', '/');
		cy.get('nav');
	});

	it('Navigates to About', () => {
		cy.get('a[href="/about"]').click();
		cy.url('contains', '/about');
	});

	it('Click hat back to home', () => {
		cy.get('.mr-6').click();
		cy.url('contains', '/');
	});

	it('click start quiz', () => {
		cy.contains('a', 'Take Quiz').click();
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

	it('Takes user back to start of quiz from Results', () => {
		cy.contains('a', 'Restart').click();
		cy.url('contains', '/quiz');
	});
});
