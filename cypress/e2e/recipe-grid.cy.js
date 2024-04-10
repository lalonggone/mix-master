describe('cocktail and mocktail grid display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mix-master-api.onrender.com/api/v1/drinks', {fixture: 'cocktails.json'}).as('getRecipes')
    cy.visit('http://localhost:3000/cocktails')
    cy.wait('@getRecipes')
  })

  it('Display alcoholic cocktail recipes', () => {
    cy.wait('@getRecipes')
    cy.get('.drinks-grid').children().should('have.length', 3)
    .get('.drinks-grid').children().first().contains('Blackberry Midnight Martini')
    .get('.drinks-grid').children().last().contains('Cucumber Basil Smash')
  })

  it('Allow user to navigate with the nav bar to mocktail recipes and then back to cocktails', () => {
    cy.get('.nav-item').contains('Mocktails').click()
    .get('.drinks-grid').children().should('have.length', 1)
    .get('.drinks-grid').children().first().contains('Screwdriver')
    .get('.nav-item').contains('Cocktails').click()
    cy.get('.drinks-grid').children().should('have.length', 3)
    .get('.drinks-grid').children().first().contains('Blackberry Midnight Martini')
    .get('.drinks-grid').children().last().contains('Cucumber Basil Smash')
  })
})