describe('The Alphabet', () => {

  beforeEach(function () {
    cy.viewport(320, 568);
    cy.visit('/#/letterforms');
  });

  it('must link back to the course page.', () => {
    cy.get('a')
      .should('have.attr', 'href')
      .and('include', 'sanskrit-1-beginners');
  });
});
