describe('Random Drink', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://mix-master-api.onrender.com/api/v1/drink/50", {
      statusCode: 200,
      fixture: "cocktails.json",
      timeout: 10000
    }) 
    cy.visit('http://localhost:3000/drink/50') 
  })
  
    it('should visit a random drink', () => {
    cy.get('.drink-details-name').should('exist')
    cy.get('.drink-details-ingredients > h3').should('exist')
    cy.get('.drink-details-directions > h3').should('exist')
    cy.get('.drink-details-heart-icon').should('exist')
    cy.get('.drink-details-heart-icon').click().should('have.css', 'color', 'rgb(51, 51, 51)')
    cy.get(':nth-child(1) > a').click()
    cy.url().should('not.include', '/drink/50')
  })
  
  it('should render cocktails page from random drink', () => {
    cy.visit('http://localhost:3000/drink/50')
    cy.get(':nth-child(2) > a').click()
    cy.url().should('include', '/cocktails')
    cy.get('.drinks-grid').should('exist')
    cy.get('.drink-card').should('have.length', 30)
  })

  it('should render favorites page from random drink', () => {
    cy.visit('http://localhost:3000/drink/50')
    cy.get('.drink-details-heart-icon').click().should('have.css', 'color', 'rgb(51, 51, 51)')
    cy.get(':nth-child(3) > a').click()
    cy.url().should('include', '/favorites')
    cy.get('.drinks-grid').should('exist')
    cy.get('.drink-card').should('have.length', 1)
  })
})