/// <reference types="cypress"/>
describe('Tests Product Page', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
        cy.get(':nth-child(1) > .card > .card-block > .card-title').click()
    })

    it('Add to cart', () => {
        cy.contains('Add to cart').click()
        cy.get('#cartur').click(cy.wait(3000))
        cy.get('#totalp').should('have.text', '360')
        })

     it('AddToCart-Accept', () => {
        cy.contains('Add to cart').click()
        cy.get('#cartur').click(cy.wait(3000))
        cy.get('#totalp').should('have.text', '360')
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Product added`)
          })
     })
})