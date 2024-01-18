
import { faker } from '@faker-js/faker';


describe('register account with random email', () => {
    
    it('register ', () => {

      Cypress.on("uncaught:exception", () => {

        return false;
    });


      cy.visit('https://demo.automationtesting.in/')
      cy.get("#btn2").click()
      cy.get('input[type="tel"]').type(faker.phone.number())
      //const randomEmail = (Math.random).toString(36).substring(2,15)+('@mail.ru');
      //cy.get('input[data-qa="signup-email"]').type(randomEmail)

    })

  })