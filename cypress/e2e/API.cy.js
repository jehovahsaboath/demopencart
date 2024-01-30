

  describe('template spec', function => {

    it('POST request', () => {
    
    cy.request({method: 'GET', url: ('https://reqres.in/api/users') .then((response) =>  {
    
    expect(response.status).to.eq(200)

    })


})