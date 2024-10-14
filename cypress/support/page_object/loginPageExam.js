class loginPageExam {
    get loginSucessText() {
        return cy.get('#flash')
    }

    verifyLoginSucessText() {
        this.loginSucessText.should('have.text', 'You logged into a secure area!')
    }

    
}