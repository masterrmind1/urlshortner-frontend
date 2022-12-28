///<reference types="cypress"/>

it('Generate short url', ()=>{

    cy.visit('http://localhost:4200/login',{timeout:100000})
    cy.get('#email')
    cy.get('#password')
    cy.get('[type="submit"]',{timeout: 5000}).click()
    cy.get('#longUrl')
    cy.get('div.ng-tns-c81-3 > .mat-focus-indicator').click()
    cy.get('.mat-card')
 })