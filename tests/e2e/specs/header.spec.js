// https://docs.cypress.io/api/introduction/api.html
describe('header test', () => {
  it('navigation click', () => {
    cy.visit('/');
    cy.get('#app > header > div > nav > ul > li:nth-child(1) > a').click();
    cy.get('#app > header > div > nav > ul > li:nth-child(2) > a').click();
    cy.get('#app > header > div > nav > ul > li:nth-child(3) > a').click();
  });
});
