/// <reference types="cypress"/>
describe('Tests Product Page', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title').click()
    })

    it('Add to cart', () => {
        cy.contains('Add to cart').click()

    })

    // it('AddToCart-Accept', () => {
    //  Este popup no aparece al clicar dentro del cypress
    // })

})