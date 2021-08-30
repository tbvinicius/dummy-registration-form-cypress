/// <reference types="cypress" />

//package where the autocomplete comes from


//no we need a testRunner we will use mocha that comes built in with cypress.
// mocha is the only testRunner that comes with Cypress.

//it is a function
it('should be able to add a new registration', ()=>{
    cy.visit('http://way2automation.com/way2auto_jquery/index.php');
    
    cy.get('#load_box > #load_form > :nth-child(5) > input').type("Estou Tão Feliz De Usar o Cypress{enter}");
    cy.get('#load_box > #load_form > :nth-child(6) > input').type("0800-171-171{enter}")
    cy.get(':nth-child(7) > input').type("eu@eu.com.br{enter}");
    cy.get('select').select("Brazil");
    cy.get(':nth-child(9) > input').type("Porto Alegre{enter}");

    cy.get(':nth-child(10) > input').type("CypressSeuLindoTeAmamos{enter}");
    cy.get(':nth-child(11) > input').type("facilidade{enter}");
    cy.get(':nth-child(12) > .span_1_of_4 > .button').click();
    cy.get('#alert').contains('This is just a dummy form, you just clicked SUBMIT BUTTON');
})
