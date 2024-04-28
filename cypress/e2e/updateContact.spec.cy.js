describe('Update Contact Tests', () => {

  beforeEach(() => {
    cy.login()
  })

    it('Can update a contact', () => {

      let random = Math.floor(Math.random() * 1000)
  
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.get('#edit-contact').click()
      cy.get('#firstName').clear().type('Update' + random)
      cy.get('#lastName').clear().type('Person')
      cy.get('#birthdate').clear().type('2001-02-03')
      cy.get('#email').clear().type('bar@foo.com')
      cy.get('#phone').clear().type('8005551001')
      cy.get('#street1').clear().type('234 Cypress Ave.')
      cy.get('#street2').clear().type('Apt. 2B')
      cy.get('#city').clear().type('New York')
      cy.get('#stateProvince').clear().type('NY')
      cy.get('#postalCode').clear().type('23456')
      cy.get('#country').clear().type('United States')
      cy.get('#submit').click()
      cy.get('#return').click()

      cy.contains('Update' + random + ' Person').click()
      cy.get('#firstName').should('contain', `Update${random}`)
      cy.get('#lastName').should('contain', 'Person')
      cy.get('#birthdate').should('contain', '2001-02-03')
      cy.get('#email').should('contain', 'bar@foo.com')
      cy.get('#phone').should('contain', '8005551001')
      cy.get('#street1').should('contain', '234 Cypress Ave.')
      cy.get('#street2').should('contain', 'Apt. 2B')
      cy.get('#city').should('contain', 'New York')
      cy.get('#stateProvince').should('contain', 'NY')
      cy.get('#postalCode').should('contain', '23456')
      cy.get('#country').should('contain', 'United States')

    })

    it('Returns error when birthdate validation fails', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.addContact(random)
      cy.contains('Test' + random + ' User').click()
      cy.get('#edit-contact').click()
      cy.get('#birthdate').clear().type('02-03-2001')
      cy.get('#submit').click()
      cy.get('#error').should('contain', 'Birthdate is invalid')
      cy.get('#cancel').click()
    })

    afterEach(() => {
      cy.deleteContact()
    })
  })