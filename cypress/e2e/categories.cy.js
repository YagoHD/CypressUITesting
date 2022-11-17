/// <reference types="cypress"/>
describe('Tests Categories', () => {
    it('Select phones category', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('[onclick="byCat(\'phone\')"]').click()
        cy.contains('Phones').click()
    })

    it('Select Laptops category', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('[onclick="byCat(\'notebook\')"]').click()
        cy.contains('Laptops').click()
    })

    it('Select Monitors category', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('[onclick="byCat(\'monitor\')"]').click()
        cy.contains('Monitors').click()
    })

    //  it('Select a category without products', () => {
    //  Este test lo añadi de forma extra en el repositorio de Qase
    //  })
})