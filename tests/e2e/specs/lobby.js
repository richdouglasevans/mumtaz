describe('The Lobby', () => {

  beforeEach(function () {
    cy.viewport(320, 568);
    cy.visit('/');
  });

  const games = ['letterforms', 'vowels'];

  games.forEach(game => {
    it(`has a link to launch the "${game}" game.`, () => {
      cy.get(`[data-cy="${game}"]`).then($el => {
        expect($el).to.have.attr('href', `#/${game}`);
      });
    });
  });
});
