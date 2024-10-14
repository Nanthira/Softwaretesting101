describe('formfilled', () => {
    beforeEach(() => {
        cy.visit('https://practice-automation.com/form-fields/')
    })
    it('tc-01', () => {
        cy.get('[for="name-input"]')
            .type('Nanthira');
        
        cy.get('.red_txt')
            .should('contain', 'Required');
        
        cy.get('#feedbackForm > :nth-child(3)')
            .type('Password123');
        
        cy.get('[type="checkbox"]')
            .check(['Wine', 'Milk', 'Ctrl-Alt-Delight']);
        
        cy.get('[type="checkbox"]')
            .uncheck('Ctrl-Alt-Delight');

        cy.get('[type="radio"]')
            .check(['Blue', 'Yellow']);

        cy.get('select')
            .select('Yes')

        cy.get('[data-cy="email"]')
            .type('6410210159@email.psu.ac.th');

        cy.get('[data-cy="message"]')
            .type('I dont know what am I doing now');
            
        cy.contains('Submit')
        .click()

    })
})

