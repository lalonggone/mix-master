describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display a title and a quiz section', () => {
    cy.get('.home-title > h1').should('have.text', 'Mix Master')
    cy.get('.home-title > p').should('have.text', 'your drink recipe companion')
    cy.get('.quiz-title').should('have.text', 'Do you prefer...')
    cy.get('.radio-container').should(
      'have.text',
      'Alcoholic beveragesNA beverages'
    )
    cy.get('.radio-container').find('input').should('have.length', 2)
    cy.get('button').should('have.text', 'Find Drinks')
  })

  it('should navigate to cocktails page when alc radio btn is selected', () => {
    cy.get(':nth-child(1) > input').check()
    cy.get('button').click()
    cy.url().should('include', '/cocktails')
  })

  it('should navigate to the NA drinks page when the NA radio btn is selected', () => {
    cy.get(':nth-child(2) > input').check()
    cy.get('button').click()
    cy.url().should('include', '/mocktails')
  })
})
