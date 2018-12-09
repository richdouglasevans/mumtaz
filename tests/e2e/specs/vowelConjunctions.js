describe('Vowel Conjunctions', () => {

  beforeEach(function () {
    cy.viewport(320, 568);
    cy.visit('/#/vowels');
  });

  it('must link back to the course page.', () => {
    cy.get('a')
      .should('have.attr', 'href')
      .and('include', 'sanskrit-1-beginners');
  });
});
