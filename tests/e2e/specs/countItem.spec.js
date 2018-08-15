// https://docs.cypress.io/api/introduction/api.html
describe('countItem test', () => {
  it('countItem', () => {
    cy.visit('/about');
    cy.get('li').should('have.length', 1003);
  });
});
