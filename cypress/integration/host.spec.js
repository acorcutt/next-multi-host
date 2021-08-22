// host.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('multiple hosts', () => {
  it('should work on sub domain hosts', () => {
    cy.visit('http://one.localhost:3000/posts/a');
    cy.get('h1').first().should('include.text', 'one.localhost');
  });
  it('should work on another hosts', () => {
    cy.visit('http://two.localhost:3000/posts/a');
    cy.get('h1').first().should('include.text', 'two.localhost');
  });
});
