// https://docs.cypress.io/api/introduction/api.html
describe('form test', () => {
  const inputValue = {
    name1: '山田',
    name2: '太郎',
    age: 23,
    email: 'hogehoge@example.com',
    textarea: 'ほげほげふがふが'
  };

  it('success input', () => {
    cy.visit('/form');
    cy.get('#name1').type(inputValue.name1);
    cy.get('#name2').type(inputValue.name2);
    cy.get('#age').type(inputValue.age);
    cy.get('#email').type(inputValue.email);
    cy.get('#textarea').type(inputValue.textarea);
    cy.get('button').click();

    cy.url().should('contain', '/form/confirm');

    cy.get('#submit').click();
    cy.url().should('contain', '/form/complete');

    cy.get('.button').click();
    cy.url().should('contain', '/');
  });
});
