describe('Add Contact Tests', () => {
    it('Can add a new contact', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com')
      cy.get('#email').type('mondaymorning1@fake.com')
      cy.get('#password').type('foobarfoo')
      cy.get('#submit').click()
      cy.get('#add-contact').click()
      cy.get('#firstName').type('Test')
      cy.get('#lastName').type('User')
      cy.get('#birthdate').type('2000-01-02')
      cy.get('#email').type('foo@bar.com')
      cy.get('#phone').type('8005001000')
      cy.get('#submit').click()
    })
  })