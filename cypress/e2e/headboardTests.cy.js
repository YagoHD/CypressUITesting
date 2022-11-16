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
    })

    it('Click on Contact-Close',() => {
        cy.on('#exampleModal')
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        })
    

 

})