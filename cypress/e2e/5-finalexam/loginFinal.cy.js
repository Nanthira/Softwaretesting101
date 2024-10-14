const testDataLogin = require("../../fixtures/loginExam.json")

describe('loginFinal', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    
    it('tc-01', () => {
        cy.loginExam(testDataLogin.username.positive, testDataLogin.password.positive)
        cy.get('#flash').should('be.visible').and('contain.text', 'secure area!')
    })

    it('tc-02', () => {
        cy.loginExam(testDataLogin.username.positive, testDataLogin.password.negative)
        cy.get('#flash').should('be.visible').and('contain.text', 'invalid!','password')
    })
    it('tc-03', () => {
        cy.loginExam(testDataLogin.username.negative, testDataLogin.password.negative)
        cy.get('#flash').should('be.visible').and('contain.text', 'invalid!','username')
    })
})
