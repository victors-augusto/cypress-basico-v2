Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Augusto')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Teste')
    //cy.get('button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
})