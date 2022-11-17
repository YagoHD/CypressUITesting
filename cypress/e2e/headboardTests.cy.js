/// <reference types="cypress"/>
describe('Tests Headboard', () => {
    // it('First we connect to the web to check that it works', () => {
    //     cy.visit('https://www.demoblaze.com/')
    // })


    // it('Click on product store or web logo', () => {
    //     cy.get('#nava').click()
    // })

    // it('Click on Home', () => {
    //     cy.get('.active > .nav-link').click()
    // })

    // it('Click on Contact', () => {
    //     cy.get(':nth-child(2) > .nav-link').click()
    // })

    // it('Click on Contact-Close',() => {
    //     cy.visit('https://www.demoblaze.com/')
    //     cy.get(':nth-child(2) > .nav-link').click()
    //     cy.get('#exampleModal').should('be.visible').contains('button', 'Close')
    //     cy.contains('Close').click()
    // })

    // it('Click on Contact-SendMessage', () => {
    //     cy.visit('https://www.demoblaze.com/')
    //     cy.get(':nth-child(2) > .nav-link').click()
    //     cy.get('#exampleModal').should('be.visible').contains('button', 'Send message')
    //     cy.contains('Send message').click()
    // })

    // it('Click on Contact-SendMessage-Accept', () => {
        
    // })

    it('Click on About Us', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(3) > .nav-link').click()

    })

    // it('Click on AboutUs-Click on video', () => {
    //     cy.visit('https://www.demoblaze.com/')
    //     cy.get(':nth-child(3) > .nav-link').click()
    //     cy.get('#videoModal').should('be.visible').contains('button', 'vjs-poster')
    //     cy.get('.vjs-poster').click()
    // })

    it('Click on AboutUs-Click Close', () => {
        cy.get('#videoModal').should('be.visible').contains('button', 'Close')
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })

    // it('Click on Cart', () => {
    //     cy.visit('https://www.demoblaze.com/')
    //     cy.get('#cartur').click()
    // })

    // it('Click on Cart-DeleteProduct', () => {
    //     if (('#tbodyid > :nth-child(1) > :nth-child(4) > a').length) {
    //         cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click()
    //     } else {
    //         // no existe
    //       }
    // })

    // it('Click on Cart-PlaceOrder', () => {
    //     cy.get('.col-lg-1 > .btn').click()

    // })

    // it('Click on Cart-PlaceOrder-Close', () => {
        
    // })

    // it('Click on Cart-PlaceOrder-Purchase', () => {
        
    // })

    // it('Click on Cart-PlaceOrder-Purchase-InvalidData', () => {
        
    // })

    // it('Click on Cart-PlaceOrder-Purchase-Ok', () => {
        
    // })

    it('Click on Log in', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()

    })

    it('Click on LogIn-Close', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.get('#logInModal').should('be.visible').contains('button', 'Close')
        cy.contains('Close').click({force: true})
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })

    // it('Click on LogIn-Log in', () => {
        
    // })

    // it('Click on LogIn-LogIn-InvalidData', () => {
        
    // })

    it('Click on Sign up', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click()
    })

    it('Click on SignUp-Close', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click()
        cy.wait(5000)

        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })

    // it('Click on SignUp-Sign up', () => {
        
    // })

    // it('Click on Login-LogIn-NameChosen', () => {
        
    // })
 
})