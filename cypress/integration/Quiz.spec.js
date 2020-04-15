describe('Render Quiz Component', () => {
	it('Visits the quiz', () => {
		cy.start();
	});

	it('Start of the Quiz', () => {
		cy.contains('Question 1');

		cy.get('div[class="flex flex-col w-full mt-4 mb-2"]').should('have.length', 1);
		cy.get('div[class="flex items-center justify-start w-full mt-1 fira-sans"]').should('have.length', 4);
	});

	it('Returns to Landing page', () => {
		cy.clickBack();
		cy.start();
		cy.url('contains', '/quiz');
	});

	it('Next works if answer selected', () => {
		for (let i = 1; i <= 7; i++) {
			// unsucceful button click: checks if current question is still rendered if answer is chosen
			// todo fix quiz component button if answer not selected
			// cy.contains(`Question ${i}`);
			// cy.get('.bg-purple-400').click();
			// tests a successful next button click
			cy.contains(`Question ${i}`);
			cy.clickAnswer();
			cy.clickNext();
		}
	});

	it('Clicks back through Quiz and forward again', () => {
		for (let i = 0; i <= 6; i++) {
			cy.clickBack();
		}
		for (let i = 0; i <= 7; i++) {
			cy.clickAnswer();
			cy.clickNext();
		}
	});

	it('Reaches Reusults component', () => {
		cy.url('contains', '/results');
	});
});
