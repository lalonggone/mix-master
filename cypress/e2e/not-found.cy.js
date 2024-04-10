describe('Use the NotFound component when given a faulty address', () => {
    it('should display the NotFound component when visiting a non-existent URL route', () => {
        cy.visit("http://localhost:3000/blah")
        .get(".not-found").contains("h1", "404 Page not found...")
    })
})