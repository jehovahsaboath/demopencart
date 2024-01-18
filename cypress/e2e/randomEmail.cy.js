describe('register account with random email', () => {

    

    it('register ', () => {

    
      //const randomEmail = Math.random().toString(36).substring(7); + `testuser${5}@mail.ru`;
        
      const randomEmail = `testuser${Math.random().toString(36).substring(7)}@mail.ru`;


      cy.visit('https://automationexercise.com/')
      cy.get("[href='\/login']").click()
      cy.get('input[data-qa="signup-name"]').type('Random Name')
      //const randomEmail = (Math.random).toString(36).substring(2,15)+('@mail.ru');
      cy.get('input[data-qa="signup-email"]').type(randomEmail)

    })

  })