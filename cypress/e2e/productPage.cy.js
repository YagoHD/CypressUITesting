/// <reference types="cypress"/>
describe('Tests Product Page', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title').click()
    })

    it('Add to cart', () => {
        cy.get('.col-sm-12 > .btn').click()
        
    })

    it('AddToCart-Accept', () => {
        
    })

})