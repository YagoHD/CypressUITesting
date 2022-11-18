/// <reference types="cypress"/>
describe('Tests Headboard', () => {
//     it('Click on product store or web logo', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#nava').click()
//         cy.get('#narvbarx').should('be.visible')
//     })

//     it('Click on Home', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('.active > .nav-link').click()
//         cy.get('#narvbarx').should('be.visible')
//     })

//     it('Click on Contact', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get(':nth-child(2) > .nav-link').click()
//     })

//     it('Click on Contact-Close',() => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get(':nth-child(2) > .nav-link').click()
//         cy.get('#exampleModal').should('be.visible').contains('button', 'Close')
//         cy.contains('Close').click(cy.wait(5000))
//     })

//     it('Click on Contact-SendMessage', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get(':nth-child(2) > .nav-link').click()
//         cy.get('#exampleModal').should('be.visible').contains('button', 'Send message')
//         cy.contains('Send message').click(cy.wait(5000))
//     })

//     it('Click on Contact-SendMessage-Accept', () => {
//     //  ESTE MENSAJE NO ME APARECE CON EKL BOTON ACCEPT NO APARECE EN EL CYPRESS
//     })

//     it('Click on About Us', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get(':nth-child(3) > .nav-link').click()

//     })

//     it('Click on AboutUs-Click on video', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get(':nth-child(3) > .nav-link').click(cy.wait(3000))
//         cy.get('#videoModal').should('be.visible')
//         cy.get('.vjs-poster').click(cy.wait(3000))
//     })

//     it('Click on AboutUs-Click Close', () => {
//         cy.get('#videoModal').should('be.visible').contains('button', 'Close')
//         cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
//     })

//     it('Click on Cart', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#cartur').click()
//     })

//     it('Click on Cart-DeleteProduct', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get(':nth-child(1) > .card > .card-block > .card-title').click(cy.wait(3000))
//         cy.contains('Add to cart').click(cy.wait(3000))
//         cy.get('#nava').click(cy.wait(3000))
//         cy.get('#cartur').click(cy.wait(3000))
//         cy.get('.success > :nth-child(4) > a').click(cy.wait(3000))
//         cy.get('#totalp').should('have.text', '')
//     })

//     it('Click on Cart-PlaceOrder', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#cartur').click(cy.wait(3000))
//         cy.get('.col-lg-1 > .btn').click(cy.wait(3000))

//     })

//     it('Click on Cart-PlaceOrder-Close', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#cartur').click(cy.wait(3000))
//         cy.get('.col-lg-1 > .btn').click(cy.wait(3000))
//         cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click(cy.wait(3000))
//     })

//     it('Click on Cart-PlaceOrder-Purchase', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#cartur').click(cy.wait(3000))
//         cy.get('.col-lg-1 > .btn').click(cy.wait(3000))
//         cy.get('#name').type("Automation")
//         cy.get('#country').type("Automation")
//         cy.get('#city').type("Automation")
//         cy.get('#card').type("Automation")
//         cy.get('#month').type("Automation")
//         cy.get('#year').type("Automation")
//         cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(cy.wait(3000))
//     })

// it('Click on Cart-PlaceOrder-Purchase-Ok', () => {
//         cy.get('.confirm').click(cy.wait(3000))
//     })


//     it('Click on Cart-PlaceOrder-Purchase-InvalidData', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#cartur').click(cy.wait(3000))
//         cy.get('.col-lg-1 > .btn').click(cy.wait(3000))
//         cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(cy.wait(3000))
//     })

//     it('Click on Log in', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#login2').click()

//     })

//     it('Click on LogIn-Close', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#login2').click()
//         cy.get('#logInModal').should('be.visible').contains('button', 'Close')
//         cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click(cy.wait(5000))
//     })

    it('Click on LogIn-Log in', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click().wait(3000)
        cy.get('#loginusername').type("abcabcabc1")
        cy.get('#loginpassword').type("abcabcabc1").wait(3000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(cy.wait(5000))
        cy.get('#nameofuser').should('have.text', 'Welcome abcabcabc1')
    })

    it('Click on LogIn-LogIn-InvalidData', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.get('#logInModal').should('be.visible').contains('button', 'Close')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(cy.wait(5000))
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Please fill out Username and Password.`)
          })
    })

//     it('Click on Sign up', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#signin2').click()
//     })

//     it('Click on SignUp-Close', () => {
//         cy.visit('https://www.demoblaze.com/')
//         cy.get('#signin2').click()
//         cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click(cy.wait(5000))
//     })

    it('Click on SignUp-Sign up', () => {
        const uuid = () => Cypress._.random(20, 1e6)
        const id = uuid()
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click()
        cy.get('#sign-username').type(id).wait(3000)
        cy.get('#sign-password').type(id).wait(3000)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(cy.wait(3000))
        cy.on('window:alert', (str) => {
            expect(str).should.to.equal(`Sign up successful.`)
          })
    })

    // it('Click on SignUp-SignUp-InvalidData', () => {
    //     cy.visit('https://www.demoblaze.com/')
    //     cy.get('#signin2').click().wait(3000)
    //     cy.get('#sign-username').type("a").wait(3000)
    //     cy.get('#sign-password').type("a")
    //     cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(cy.wait(3000))
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.equal(`This user already exist.`)
    //       })
    // })
})