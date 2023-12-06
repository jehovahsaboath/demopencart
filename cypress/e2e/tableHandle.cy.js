

describe('template spec',()=>{

    beforeEach('Login', () =>{

      cy.visit('https://demo.opencart.com/admin/')
      cy.get('input[id="input-username"]').type('demo')
      cy.get('input[id="input-password"]').type('demo')
      cy.get('button[type="submit"]').click()


    })

    it('logins into the application', () => {

      cy.get('button[class="btn-close"]').click()
      cy.get('li[id="menu-customer"]').click()
      cy.get('#menu-customer>ul>li:first-child').click()

        // verify tables length  rows and column
      cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', '10');

      cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7');

       // chek data in a specifit cell ( row and column)

       cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)')
       .contains('gorankrezic90@gmail.com');


    })










  })