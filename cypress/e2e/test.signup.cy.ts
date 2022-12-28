///<reference types="cypress"/>

it('Signup Form', ()=>{

    cy.visit('http://localhost:4200/login', {timeout: 4000})
    cy.get('[type="button"]').click()
    cy.get('#email')
    cy.get('#password')
    cy.get('#ConfirmPassword')
    cy.get('[type="submit"]').click()
 })