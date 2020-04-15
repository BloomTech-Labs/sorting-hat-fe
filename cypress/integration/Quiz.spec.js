describe('Render Quiz Component', () => {
	it('Visits the quiz', () => {
		cy.start();
		cy.url('contains', '/quiz');
	});

	it('Start of the Quiz', () => {
		cy.contains('Question 1');

		cy.get('div[class="flex flex-col w-full mt-4 mb-2"]').should('have.length', 1);
		cy.get('div[class="flex items-center justify-start w-full mt-1 fira-sans"]').should('have.length', 4);
	});

	it('Clicks through Quiz', () => {
		for (let i = 1; i <= 8; i++) {
			cy.contains(`Question ${i}`);
			cy.clickAnswer();
		}
	});

	it('Reaches Reusults component', () => {
		cy.url('contains', '/results');
	});
});
