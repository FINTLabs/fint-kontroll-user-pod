describe('template spec', () => {
  beforeEach(() => {
    cy.goToHome()
    cy.apiInterceptOrg()
    cy.apiInterceptUser()
  })
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})