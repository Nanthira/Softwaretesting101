// describe('login', () => {
//     beforeEach(() => {
//         cy.visit('https://practicetestautomation.com/practice-test-login/')
//         })

//     it('tc-01', () => {
//         // cy.visit('https://practicetestautomation.com/practice-test-login/')
//         // cy.get('#username').type('student')
//         // cy.get('#password').type('Password123')
//         // cy.get('#submit').click()
//         cy.login('student','Password123')
//         cy.get('.post-title').should('have.text','Logged In Successfully','Congratulations')
//         cy.get('.wp-block-button__link').click()
//     })

//     it('tc-02', () => {
//         // cy.visit('https://practicetestautomation.com/practice-test-login/')
//         // cy.get('#username').type('incorrectUser')
//         // cy.get('#password').type('Password123')
//         // cy.get('#submit').click()
//         cy.login('incorrectUser','Password123')
//         cy.get('#error').should('have.text','Your username is invalid!')
//         // cy.get('#error').contains('have.text','Your username is invalid!')

//         // cy.wait(4000)
//         // cy.get('#username').should('be.empty').type('student')
//         // cy.get('#password').should('be.empty').type('Password123')
//         cy.screenshot()
//     })

//     it('tc-03', () => {
//         // cy.visit('https://practicetestautomation.com/practice-test-login/')
//         cy.login('student','incorrectPassword')
//         // cy.get('#username').type('student')
//         // cy.get('#password').type('incorrectPassword')
//         // cy.get('#submit').click()
//         cy.get('#error').should('have.text','Your password is invalid!')
//     })


// })

const testDataLogin = require("../../fixtures/login.json")
import loginPage from "../../support/page_object/loginPage"

describe('login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('tc-01', () => {
        // cy.login('student', 'Password123')
        cy.login(testDataLogin.username.positive,testDataLogin.password.positive)
        // cy.get('.post-title').should('have.text', 'Logged In Successfully', 'Congratulations')
        loginPage.verifyLoginSucessText()
    })

        it('tc-02', () => {
        cy.login(testDataLogin.username.negative,testDataLogin.password.positive)
        // cy.get('#error').should('have.text','Your username is invalid!')
        loginPage.verifyLoginErrorUsername()
    })

    it('tc-03', () => {
        cy.login(testDataLogin.username.positive,testDataLogin.password.negative)
        // cy.get('#error').should('have.text','Your password is invalid!')
        loginPage.verifyLoginErrorPassword('Your password is invalid!')
    })

})