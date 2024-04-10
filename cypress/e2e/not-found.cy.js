describe('Use the NotFound component when given a faulty address', () => {
    beforeEach(() => {
        cy.intercept('GET', "https://mix-master-api.onrender.com/api/v1/drinks", {
          statusCode: 200,
          fixture: "cocktails.json",
          timeout: 10000
        })
    })
    it('should display the NotFound component when visiting a non-existent URL route', () => {
        cy.visit("http://localhost:3000/blah")
        .get(".not-found").contains("h1", "404 Page not found...")
    })
})