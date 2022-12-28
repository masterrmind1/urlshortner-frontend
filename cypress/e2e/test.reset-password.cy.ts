///<reference types="cypress"/>

it('Reset Password', ()=>{

    cy.visit('http://localhost:4200/login')
    cy.get('#email')
    cy.get('#password')
    cy.get('[type="submit"]').click()
    cy.visit('http://localhost:4200/', {timeout: 4000})
    cy.get('.mat-menu-trigger').click()
    cy.get('.mat-menu-content > [routerlinkactive="active"]').click()
    cy.get('#password')
    cy.get('#newPassword')
    cy.get('#ConfirmPassword')
    cy.get('[type="submit"]').click()
 })