/// <reference types="cypress"/>
describe('Tests Categories', () => {
    it('Select phones category', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('[onclick="byCat(\'phone\')"]').click(cy.wait(5000))
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Samsung galaxy s6')

    })

    it('Select Laptops category', () => {
        cy.get('[onclick="byCat(\'notebook\')"]').click(cy.wait(5000))
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Sony vaio i5')

    }) 

    it('Select Monitors category', () => {
        cy.get('[onclick="byCat(\'monitor\')"]').click(cy.wait(5000))
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Apple monitor 24')

    })

    //  it('Select a category without products', () => {
    //  Este test lo añadi de forma extra en el repositorio de Qase
    //  })
})