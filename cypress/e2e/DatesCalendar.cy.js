describe('How to Handle Calendars', () => {

    Cypress.on("uncaught:exception", () => {

        return false;
    });

    it('passes', () => {

        cy.visit("http://localhost:3000/login")
        cy.get("input[placeholder='Email']").type('baby')
        cy.get('input[type="password"]').type('baby')
        cy.get('div:nth-child(3) p:nth-child(1)').click()
        cy.get('.language-selector div:nth-of-type(2) p').click()
        cy.get('div:nth-of-type(4) > .navitem-header > .navitem-header-text').click()
        cy.get('[href="/ri-business/sales/customer-list"]').click()
        cy.get('[name="Search"]').type('speed')
        cy.contains('speed').click()
        cy.get('div:nth-of-type(6) > .button > p').click()
        cy.get('div:nth-of-type(3) > div:nth-of-type(2) > p').click()

    })

    it.only('passes', () => {

        cy.visit("https://practice-automation.com/calendars/")
        cy.get('#g1065-selectorenteradate').click()
        cy.get('.ui-datepicker-next').click()


        




    })







})