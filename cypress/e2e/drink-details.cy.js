describe('should display correct information upon visiting a detailed drink', () => {
    beforeEach(() => {
      cy.intercept('GET', "https://mix-master-api.onrender.com/api/v1/drinks", {
        statusCode: 200,
        // fixture:
      })
      cy.visit("http://localhost:3000")
      .get(".drink-card").first().click()
    })
    
    it('should correctly bring up a drink details view upon clicking', () => {
      cy.url().should("eq", "http://localhost:3000/")
    })
  
    it('should display correct elements and information on the drink details view', () => {
      cy.get(".drink-details-page").contains("img")
      .get(".drink-details-page").get("article").contains("h1")
      .get(".drink-details-page").get("article").contains("h2")
      .get(".drink-details-page").get("article").contains("h3")
      .get(".drink-details-page").get("article").contains("li")
      .get(".drink-details-page").get("article").contains("li")
      .get(".drink-details-page").get("article").contains("li")
      .get(".drink-details-page").get("article").contains("h3")
      .get(".drink-details-page").get("article").contains("li")
      .get(".drink-details-page").get("article").contains("li")
      .get(".drink-details-page").get("article").contains("li")
    })
  })