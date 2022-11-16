/// <reference types="cypress"/>
describe('Tests Categories', () => {
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/')

    })
    it('Select phones category', () => {
        cy.get('[onclick="byCat(\'phone\')"]').click()
    })

    it('Select Laptops category', () => {
        cy.get('[onclick="byCat(\'notebook\')"]').click()
    })

    it('Select Monitors category', () => {
        cy.get('[onclick="byCat(\'monitor\')"]').click()
    })

     it('Select a category without products', () => {
    
     })
})