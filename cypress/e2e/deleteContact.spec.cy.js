describe('Delete Contact Tests', () => {
    it('Can delete a contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.deleteContact()
      cy.get('.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
    })
  })