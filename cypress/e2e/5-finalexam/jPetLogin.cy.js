describe('loginFinal', () => {
    beforeEach(() => {
        cy.visit('https://petstore.octoperf.com/actions/Account.action')
    })
    
    it('tc-01', () => {
        cy.get('#Catalog > form > :nth-child(2)').then($element => {
            if ($element.is(':visible')) {
                cy.log('Element is visible')
                cy.get('#Catalog > form > :nth-child(2)').should('contain.text','Username','Password')
                
                cy.get('input[name="username"]').then($username => {
                    if ($username.is(':visible')){
                        cy.get('input[name="username"]').should('be.empty')
                        if (!$username.is(':Empty')){
                            $username.clear()
                        }else{
                            cy.log('Username is already empty')
                        }
                        cy.get('input[name="username"]').type('j2ee')
                    } else{
                        cy.log ('No Username box to input')
                    }
                })
            } else {
                cy.log('Element is not visible')
            }
            cy.get('input[name="password"]').then($password => {
                if ($password.is(':visible')){
                    cy.get('input[name="password"]').should('be.empty')
                    
                    if (!$password.is(':Empty')){
                        cy.log('password is already empty')
                    }else{
                        cy.get('input[name="password"]').clear()
                    }
                    cy.get('input[name="password"]').type('j2ee')
                } else{
                    cy.log ('No password box to input')
                }
            })
            cy.get('[name="signon"]').click()
            cy.get('#WelcomeContent').should('contain.text',"Welcome")
        })
    })

    it('tc-02', () => {
        cy.get('#Catalog > form > :nth-child(2)').then($element => {
            if ($element.is(':visible')) {
                cy.log('Element is visible')
                cy.get('#Catalog > form > :nth-child(2)').should('contain.text','Username','Password')
                
                cy.get('input[name="username"]').then($username => {
                    if ($username.is(':visible')){
                        cy.get('input[name="username"]').should('be.empty')
                        if (!$username.is(':Empty')){
                            $username.clear()
                        }else{
                            cy.log('Username is already empty')
                        }
                        cy.get('input[name="username"]').type('1223')
                    } else{
                        cy.log ('No Username box to input')
                    }
                })
            } else {
                cy.log('Element is not visible')
            }
            cy.get('input[name="password"]').then($password => {
                if ($password.is(':visible')){
                    cy.get('input[name="password"]').should('be.empty')
                    
                    if (!$password.is(':Empty')){
                        cy.log('password is already empty')
                    }else{
                        cy.get('input[name="password"]').clear()
                    }
                    cy.get('input[name="password"]').type('j2ee')
                } else{
                    cy.log ('No password box to input')
                }
            })
            cy.get('[name="signon"]').click()
            cy.get('.messages').should('contain.text','fail')
        })
    })
})

// kitsiri.c@psu.ac.th