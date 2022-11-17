/// <reference types="cypress"/>
describe('Tests Exhibitor', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')
    })

    it('Click on right arrow navigation', () => {
        cy.get('.carousel-control-next-icon').click()
    })

    it('lick on left arrow navigation', () => {
        cy.get('.carousel-control-next-icon').click()
    })

    it('First button navigation', () => { 
        cy.get('[data-slide-to="0"]').click()
        // cy.get('.active > .d-block').should('have.css', 'background-image').and('include', 'Samsung1.jpg')
    })

    it('Second button navigation', () => {
        cy.get('[data-slide-to="1"]').click()
    })

    it('Third button navigation', () => {
        cy.get('[data-slide-to="2"]').click()
    })

})

