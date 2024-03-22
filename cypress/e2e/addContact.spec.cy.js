describe('Add Contact Tests', () => {
    it('Can add a new contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()    
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.get('#firstName').should('contain', `Test${random}`)
      cy.get('#lastName').should('contain', 'User')
      cy.get('#birthdate').should('contain', '2000-01-02')
      cy.get('#email').should('contain', 'foo@bar.com')
      cy.get('#phone').should('contain', '8005001000')
      cy.get('#street1').should('contain', '123 Main St.')
      cy.get('#street2').should('contain', 'Apt. 1A')
      cy.get('#city').should('contain', 'Boston')
      cy.get('#stateProvince').should('contain', 'MA')
      cy.get('#postalCode').should('contain', '12345')
      cy.get('#country').should('contain', 'USA')

      cy.deleteContact()
    })
  })