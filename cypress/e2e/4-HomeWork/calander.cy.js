describe('slice', () => {
    beforeEach(() => {
        cy.visit('https://practice-automation.com/calendars/')
    })

    it('tc-01', () => {
        cy.get('#g1065-selectorenteradate')
            .type('30/9/2024')
            .should('be.visible');

        cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
            .click();

        cy.contains('Submit')
            .click()
    })
})