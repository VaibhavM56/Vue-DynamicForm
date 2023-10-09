describe('Home Page', () => {
    it('succesfully loads', () => {
        cy.visit('/')
        cy.get('form-container').type('Hello World')
    })
})