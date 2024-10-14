describe('slice', () => {
    beforeEach(() => {
        cy.visit('https://practice-automation.com/slider/')
    })
    it('tc-01', () => {
        cy.get('#slideMe')
            .invoke('val', 70)
            .trigger('input')
            .trigger('change');

        cy.get('.coolslider > :nth-child(3)')
            .invoke('text')
            .should('match', /\d+/);

    })
})