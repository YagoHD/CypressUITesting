/// <reference types="cypress"/>
describe('Tests Headboard', () => {
    it('First we connect to the web to check that it works', () => {
        cy.visit('https://www.demoblaze.com/')
    })


    it('Click on product store or web logo', () => {
        //cy.get('#nava').click().should(performance.navigation.type).to.eq(performance.navigation.TYPE_RELOAD)

        //     cy.get('#nava').click().then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
        cy.get('#nava').click()
    })

    it('Click on Home', () => {
        cy.get('.active > .nav-link').click()
    })

    it('Click on Contact', () => {
        cy.get(':nth-child(2) > .nav-link').click()
    })

    it('Click on Contact-Close',() => {
        cy.get('#exampleModal').should('be.visible').contains('button', 'Close')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    })

    it('Click on Contact-SendMessage', () => {

    })

    it('Click on Contact-SendMessage-Accept', () => {
        
    })

    it('Click on About Us', () => {
        
    })

    it('Click on AboutUs-Click on video', () => {
        
    })

    it('Click on Cart', () => {
        
    })

    it('Click on Cart-DeleteProduct', () => {
        
    })

    it('Click on Cart-PlaceOrder', () => {
        
    })

    it('Click on Cart-PlaceOrder-Close', () => {
        
    })

    it('Click on Cart-PlaceOrder-Purchase', () => {
        
    })

    it('Click on Cart-PlaceOrder-Purchase-InvalidData', () => {
        
    })

    it('Click on Cart-PlaceOrder-Purchase-Ok', () => {
        
    })

    it('Click on Log in', () => {
        
    })

    it('Click on LogIn-Close', () => {
        
    })

    it('Click on LogIn-Log in', () => {
        
    })

    it('Click on LogIn-LogIn-InvalidData', () => {
        
    })

    it('Click on Sign up', () => {
        
    })

    it('Click on SignUp-Close', () => {
        
    })

    it('Click on SignUp-Sign up', () => {
        
    })

    it('Click on Login-LogIn-NameChosen', () => {
        
    })
 
})