/// <reference types="cypress"/>
describe('Tests Exhibitor', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
    })

    it('Click on product Name', () => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    })

    it('Click on product Image', () => {
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    })

    it('Click on product Description', () => { 
        cy.get(':nth-child(1) > .card > .card-block > #article').click()
    })

    it('Click on next', () => {
        cy.get('#prev2').click()
    })
})
describe('Tests Catalog', () => {
    it('Click on previous', () => {
        cy.get('#next2').click()
    })
})
