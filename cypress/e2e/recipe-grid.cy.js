describe('cocktail and mocktail grid display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cocktails')
  })

  it('Display alcoholic cocktail recipes', () => {
    cy.get('.drinks-grid').children().should('have.length', 30)
    .get('.drinks-grid').children().first().contains('Blackberry Midnight Martini')
    .get('.drinks-grid').children().last().contains('Pomegranate Anise Martini')
  })

  it('Allow user to navigate with the nav bar to mocktail recipes and then back to cocktails', () => {
    cy.get('.nav-item').contains('Mocktails').click()
    .get('.drinks-grid').children().should('have.length', 30)
    .get('.drinks-grid').children().first().contains('Lavender Lemonade Fizz')
    .get('.drinks-grid').children().last().contains('Apple Cinnamon Seltzer')
    .get('.nav-item').contains('Cocktails').click()
    cy.get('.drinks-grid').children().should('have.length', 30)
    .get('.drinks-grid').children().first().contains('Blackberry Midnight Martini')
    .get('.drinks-grid').children().last().contains('Pomegranate Anise Martini')
  })
})