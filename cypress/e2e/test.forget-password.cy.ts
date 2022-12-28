///<reference types="cypress"/>

it('Forget Password', ()=>{

    cy.visit('http://localhost:4200/login',{timeout: 4000})
    cy.get('[style="color: blue; cursor: pointer;"]').click()
    cy.get('#email')
    cy.get(':nth-child(2) > .mat-button-wrapper').click()
    cy.visit('http://gmail.com')
 })