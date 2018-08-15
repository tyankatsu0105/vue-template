// https://docs.cypress.io/api/introduction/api.html
describe('title test', () => {
  it('title match', () => {
    cy.visit('/');
    cy.get('#app > header > div > nav > ul > li:nth-child(1) > a').click();
    cy.title().should('contain', 'vue-template');

    cy.get('#app > header > div > nav > ul > li:nth-child(2) > a').click();
    cy.title().should('contain', '会社概要 | vue-template');

    cy.get('#app > header > div > nav > ul > li:nth-child(3) > a').click();
    cy.title().should('contain', 'お問い合わせ | vue-template');
  });
});
