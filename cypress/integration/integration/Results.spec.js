describe('Results', () => {
	it('loads', () => {
		cy.start();
		cy.quiz();
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
	it('clicks UX bar of graph to display track', () => {
		cy.get(':nth-child(1) > .flex-col-reverse > .h-56').click();
		cy.contains('UX Traits');
	});
	it('clicks Web bar of graph to display track', () => {
		cy.get(':nth-child(2) > .flex-col-reverse > .h-56').click();
		cy.contains('Full Stack Traits');
	});
	it('clicks DS bar of graph to display track', () => {
		cy.get(':nth-child(3) > .flex-col-reverse > .h-56').click();
		cy.contains('DS Traits');
	});
	it('clicks IOS bar of graph to display track', () => {
		cy.get(':nth-child(4) > .flex-col-reverse > .h-56').click();
		cy.contains('IOS Traits');
	});
	it('clicks Android bar of graph to display track', () => {
		cy.get(':nth-child(5) > .flex-col-reverse > .h-56').click();
		cy.contains('Android Traits');
	});

	it('clicks DS link to view track information', () => {
		cy.get('[cy="trackLink"]').eq(0).click();
		cy.contains('DS Traits');
	});
	it('clicks IOS link to view track information', () => {
		cy.get('[cy="trackLink"]').eq(0).click();
		cy.contains('IOS Traits');
	});
	it('clicks Web link to view track information', () => {
		cy.get('[cy="trackLink"]').eq(1).click();
		cy.contains('Full Stack Traits');
	});
	it('clicks DS link to view track information', () => {
		cy.get('[cy="trackLink"]').eq(2).click();
		cy.contains('DS Traits');
	});
	it('clicks IOS link to view track information', () => {
		cy.get('[cy="trackLink"]').eq(3).click();
		cy.contains('IOS Traits');
	});
	it('clicks Android link to view track information', () => {
		cy.get('[cy="trackLink"]').eq(4).click();
		cy.contains('Android Traits');
	});
	// it('restarts quiz w/ btn button', () => {
	// 	cy.get('.border-2').contains('Retake Quiz').click();
	// 	cy.url('contains', '/quiz');
	// 	cy.quiz();
	// });
	// it('view courses Btn', () => {
	// 	cy.get('.align-baseline').contains('View Courses').click();
	// 	cy.url('contains', '/courses');
	// 	cy.contains(/work in progress come back later/i);
	// });
});
