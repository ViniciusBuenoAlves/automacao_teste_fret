/// <reference types="cypress" />

import loc from '../../support/locators/fluxoAgendamento.js'

describe('Validar fluxo de agendamento de viagens', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.agendamentoDeViagens()
  })

  it('CT01: Agendamento de viagem', function () {
    cy.fixture('fluxoAgendamento/agendamentoDeViagens').as('json').then(() => {
      // Preencher o campo de origem
      cy.get(loc.PAG_AGENDAMENTO.CAMPO_ORIGEM)
        .should('be.visible').and('be.enabled').clear()
        .type(this.json.origem1).click()

      // Preencher o campo de destino
      cy.get(loc.PAG_AGENDAMENTO.CAMPO_DESTINO)
        .should('be.visible').and('be.enabled').clear()
        .type(this.json.destino1).click()

      // Buscar as linhas disponíveis
      cy.get(loc.PAG_AGENDAMENTO.BTN_BUSCAR).click()

      // Validar linha esperada
      cy.contains(this.json.linhaEsperada).should('exist').then(() => {
        cy.log(`Linha ${this.json.linhaEsperada} encontrada com sucesso!`)
      })

      // Clicar no botão "Ver detalhes"
      cy.xpath(loc.PAG_AGENDAMENTO.XP_BTN_VER_DETALHES).eq(1)
        .should('be.visible').click()

      // Verifica se o botão de agendar está visível e habilitado
      cy.xpath(loc.PAG_AGENDAMENTO.XP_BTN_AGENDAR_VIAGEM).then($botaoTeste => {
        if ($botaoTeste.is(':visible') && !$botaoTeste.is(':disabled')) {
          cy.log(this.json.mensagemSucessoBotao)
          cy.wrap($botaoTeste).eq(0).click()
        } else {
          cy.log(this.json.mensagemErroBotao)
        }
      })
    })
  })

  it('CT02: Preencher formulário', function () {
    cy.fixture('fluxoAgendamento/listaDeEspera').as('json').then(() => {
      // Preencher o campo de origem
      cy.get(loc.PAG_AGENDAMENTO.CAMPO_ORIGEM)
        .should('be.visible').and('be.enabled').clear()
        .type(this.json.origem1).click()

      // Preencher o campo de destino
      cy.get(loc.PAG_AGENDAMENTO.CAMPO_DESTINO)
        .should('be.visible').and('be.enabled').clear()
        .type(this.json.destino1).click()

      // Buscar as linhas disponíveis
      cy.get(loc.PAG_AGENDAMENTO.BTN_BUSCAR).click()
      cy.wait(1000)

      cy.get('body').then(($body) => {
        if ($body.text().includes(this.json.msgListaDeEspera)) {
          cy.log(this.json.listaDeEsperaSucesso)

          // preencher o formulário
          cy.get(loc.PAG_LISTA_ESPERA.CAMPO_NOME).type(this.json.nome)
          cy.get(loc.PAG_LISTA_ESPERA.CAMPO_TELEFONE).type(this.json.telefone)
          cy.get(loc.PAG_LISTA_ESPERA.CAMPO_EMAIL).type(this.json.email)
          cy.get(loc.PAG_LISTA_ESPERA.CAMPO_HORARIO_CHEGADA).type(this.json.horarioChegada)
          cy.get(loc.PAG_LISTA_ESPERA.CAMPO_HORARIO_SAIDA).type(this.json.horarioSaida)
          cy.get(loc.PAG_LISTA_ESPERA.CAMPO_DATA_LIMITE).type(this.json.dataLimite)
          cy.get(loc.PAG_LISTA_ESPERA.BTN_SUBMETER_FORM).eq(0).click()

          // Verifica se a mensagem de sucesso apareceu após envio do formulário
          cy.get('body').then(($body2) => {
            if ($body2.text().includes(this.json.msgFormularioSucesso)) {
              cy.log(this.json.formularioSucesso)
            } else {
              cy.log(this.json.formularioErro)
            }
          })

        } else {
          cy.log(this.json.listaDeEsperaErro)
        }
      })
    })
  })
})
