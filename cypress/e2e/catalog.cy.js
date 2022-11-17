/// <reference types="cypress"/>
describe('Tests Catalog', () => {
    it('Click on product Name', () => {
        cy.visit('https://www.demoblaze.com/')

        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.name').should('have.text', 'Samsung galaxy s6')
    })

    it('Click on product Image', () => {
        cy.visit('https://www.demoblaze.com/')

        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.name').should('have.text', 'Samsung galaxy s6')
    })

    it('Click on product Description', () => { 
        cy.visit('https://www.demoblaze.com/')

        cy.get(':nth-child(1) > .card > .card-block > #article').click()
    })

    it('Click on next', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#next2').click(cy.wait(5000))
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Apple monitor 24')

    })

    it('Click on previous', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#prev2').click(cy.wait(5000))
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Nokia lumia 1520')
    })

})