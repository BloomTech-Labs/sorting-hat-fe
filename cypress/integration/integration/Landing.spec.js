import { getQuestions } from '../../src/redux/actions/getQuestions';

describe('Render Landing Page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('checks getQuestions', () => {
		// cy.expect(true).toBe(true)
		if (getQuestions) {
			console.log('IN Landing.spec');
			return true;
		}
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
		cy.get('[cy="question"]').should('have.length', 1);
		cy.get('button[cy=ansBtn]').should('have.length', 4);
		cy.get('button[cy=ansBtn]').first().should('have.length', 1);
	});
});
