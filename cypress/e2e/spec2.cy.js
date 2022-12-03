describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click()
  })
})