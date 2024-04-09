describe('home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('should display a title and a quiz section', () => {
    cy.visit('http://localhost:3000')
    cy.get('.home-title > h1').should('have.text', 'Mix Master')
    cy.get('.home-title > p').should('have.text', 'your drink recipe companion')
    cy.get('.quiz-title').should('have.text', 'Do you prefer...')
    cy.get('.radio-container').should('have.text', 'Alcoholic beveragesNA beverages')
    cy.get('button').should('have.text', 'Find Drinks')
  })
})
