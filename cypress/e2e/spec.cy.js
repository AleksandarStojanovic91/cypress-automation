describe('empty spec', () => {
  it('Test 1', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#query-btn').should('contain.text', 'Button')
  })
})