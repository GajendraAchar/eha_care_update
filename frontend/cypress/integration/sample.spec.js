describe('First Test', () => {
  it('finds h1', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Welcome to EHA CARE')
  })
})
