describe('Render Landing Page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	// it('checks whether particles.js is rendered', () => {

	// })

	it('finds the appropriate elements for Landing Page', () => {
		// cy.get('h2').should('contian', 'Discover the Tech Career for You');
		cy.contains('Discover the Tech Career for You');
		cy.contains(
			'Take our 5 minute survey to discover which tech field would be right for you. Discover the opportunity at your fingertips.'
		);
		cy.contains('Start Quiz');
	});

	it('Button onclick should work', () => {
		cy.get('.z-10.w-full').click();
		cy.contains('Question 1');
		// cy.get('div[class=w-full]').click();
		cy.get('div[class="flex flex-col w-full mt-4 mb-2"]').should('have.length', 1);
		cy.get('div[class="flex items-center justify-start w-full mt-1 fira-sans"]').should('have.length', 4);
	});
});
