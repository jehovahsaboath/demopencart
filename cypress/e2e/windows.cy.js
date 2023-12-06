

describe('it shows how to handle New tab', () => {

    it('shows how to work with browser windows', () => {

    Cypress.on("uncaught:exception", () => {
  
        return false;

      });
    
    
      cy.visit('https://demoqa.com/browser-windows', {
      
        onBeforeLoad(windows) {

            cy.stub(windows, 'open')
        }
     });    

    cy.get("tabButton").click();
    cy.window().its('open').should('be.called');
    cy.visit("https://demoqa.com/sample")

    cy.get('#sampleHeading').should("be.visible")
    });

});