describe('should display correct information upon visiting a detailed drink', () => {
    beforeEach(() => {
      cy.intercept('GET', "https://mix-master-api.onrender.com/api/v1/drinks", {
        statusCode: 200,
        fixture: "cocktails.json",
        timeout: 10000
      })
      cy.visit("http://localhost:3000/mocktails")
      .get(".drink-card").first().click()
    })
    
    it('should correctly bring up a drink details view upon clicking', () => {
      cy.url().should("eq", "http://localhost:3000/drink/4")
    })
  
    it('should display correct elements and information on the drink details view', () => {
      cy.get(".drink-details-page").get("article").get(".drink-details-headers").get("h1").contains("Screwdriver")
      .get(".drink-details-page").get("article").get(".drink-details-headers").get("h2").contains("Non-Alcoholic")
      .get(".drink-details-page").get("article").get(".drink-details-ingredients").contains("h3", "Ingredients")
      .get(".drink-details-page").get("article").get(".drink-details-ingredients").contains("li", "2 oz Vodka")
      .get(".drink-details-page").get("article").get(".drink-details-ingredients").contains("li", "5 oz Fresh Orange Juice")
      .get(".drink-details-page").get("article").get(".drink-details-ingredients").contains("li", "Ice")
      .get(".drink-details-page").get("article").get(".drink-details-ingredients").contains("li", "Orange Slice for garnish")
      .get(".drink-details-page").get("article").get(".drink-details-directions").contains("h3", "Directions")
      .get(".drink-details-page").get("article").get(".drink-details-directions").contains("li", "Fill a highball glass with ice cubes.")
      .get(".drink-details-page").get("article").get(".drink-details-directions").contains("li", "Pour non-alcoholic vodka and orange juice into the glass.")
      .get(".drink-details-page").get("article").get(".drink-details-directions").contains("li", "Stir well and garnish with an orange slice.")
    })
  })