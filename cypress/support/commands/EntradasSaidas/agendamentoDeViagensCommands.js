// importação do arquivo de locators

import loc from '../../locators/fluxoAgendamento'

Cypress.Commands.add('agendamentoDeViagens', function () {
cy.intercept('GET', '**/passageiros**').as('getPassageiros'); // mais genérico

cy.visit('https://www.fretadao.com.br/passageiros', { failOnStatusCode: false });
        cy.wait('@getPassageiros').then((intercept) => {
        cy.log('Interceptado:', intercept.request.url);
        expect(intercept.response.statusCode).to.eq(200);
  }) 
})

