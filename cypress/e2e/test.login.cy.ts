///<reference types="cypress"/>

 describe('Todos',()=>{

    it('Login Form', ()=>{
        cy.visit('http://localhost:4200/login')
        cy.get('#email').type('rajputp2007@gmail.com')
        cy.get('#password').type('12341234')
        cy.get('[type="submit"]').click()
        // localStorage.setItem('user','rajputp2007@gmail.com')
     })

     it('Generate short url', ()=>{
        cy.visit('http://localhost:4200/')



        
  //  expect(Boolean( localStorage.getItem('cookie'))).to.eq(false);


        cy.get('#longUrl').type('https://stackoverflow.com/questions/49553489/in-cypress-how-do-i-wait-for-a-page-to-load')
        cy.get('div.ng-tns-c81-1 > .mat-focus-indicator').click()
     })
 })