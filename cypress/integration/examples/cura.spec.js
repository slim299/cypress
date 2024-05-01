describe('Cura Make Appointment',function(){
it('visit the URL',function(){

    cy.visit('https://katalon-demo-cura.herokuapp.com/');


});

it('Click on Make Appointment',function(){
    cy.get('#btn-make-appointment').click();

});

it('Make Appointment',function(){
cy.get('select').select('Tokyo CURA Healthcare Center');
cy.get('#chk_hospotal_readmission').click();
cy.get('#radio_program_medicaid').click();
cy.get('#txt_visit_date').type('29/09/2024');
cy.get('#txt_comment').click({force : true})
cy.get('#txt_comment').type('29/09/2024');
cy.get('btn-book-appointment').click();

});

it('Verify appointment ',function(){
    cy.get('h2').contains('Appointment Confirmation');
    cy.get('#comment').contains('Appointment will be at 29/09/2024');

});

});