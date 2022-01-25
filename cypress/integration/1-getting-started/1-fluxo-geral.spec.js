/// <reference types="cypress" />
let configEnvs = {
  inf: {
    url: 'http://server-performance3.brazilsouth.cloudapp.azure.com:9013',
    user: 'handit@handit.com.br',
    password: 'h4nd1t2',
  },
};
const config = configEnvs.inf;

describe('Criando graficos de gastos no ano de 2020', () => {
  it('Visitando a HomePage', () => {
    cy.visit(`${config.url}/auth/login`)
  })

  it('Efetuando login na plataforma', () => {
    cy.get('[id=username]').should('be.visible')
    cy.get('[id=username]').type(config.user, { force: true });
    cy.get('[id=password]').type(config.password, { force: true });
    cy.get('.button').click({ force: true })
  })
  it('Configurando dimensões', () => {
    cy.get(':nth-child(3) > .dropdown-toggle').should('be.visible')
    cy.get(':nth-child(3) > .dropdown-toggle').click({ force: true })
    cy.get('#maintenance-menu > :nth-child(1) > a').should('be.visible')
    cy.get('#maintenance-menu > :nth-child(1) > a').click({ force: true })
    cy.get('[id=username]').should('be.visible')
    cy.get('[id=username]').type(config.user, { force: true });
    cy.get('[id=password]').type(config.password, { force: true });
    cy.get('.button').click({ force: true })
    cy.get('.navigation-header > .btn').should('be.visible')
    cy.get('.navigation-header > .btn').click({ force: true })
    cy.get('#dimension-description').should('be.visible')
    cy.get('#dimension-description').type('DRE')
    cy.get('[id=dimension-type]').select('Simples')
    cy.get('#save-dimension').click({ force: true })
    cy.wait(2000)
  })
  it('Criando elementos na dimensão', () => {
    cy.get('#elements-dimension').click({ force: true })
    cy.get('[id=username]').should('be.visible')
    cy.get('[id=username]').type(config.user, { force: true });
    cy.get('[id=password]').type(config.password, { force: true });
    cy.get('.button').click({ force: true })
    cy.get('#new').should('be.visible')
    cy.wait(2000)
    cy.get('#new').click({ force: true })
    cy.wait(2000)
    cy.contains('span', 'Novo Elemento').click({ force: true })
    cy.get('.handsontableInput').type('Gastos Totais', { force: true })
    cy.get('#new').click({ force: true })
    cy.get(':nth-child(2) > :nth-child(1) > .text-container > .text').dblclick()
    cy.get('.handsontableInput').type('Receita total')
    cy.get('#new').click({ force: true })
    cy.get(':nth-child(3) > :nth-child(1) > .text-container > .text').dblclick({ force: true })
    cy.get('.handsontableInput').type('Economia do mês')
    cy.wait(3000)
    cy.get(':nth-child(3) > .dropdown-toggle').click({ force: true })
    cy.get('#maintenance-menu > :nth-child(1) > a').should('be.visible')
    cy.get('#maintenance-menu > :nth-child(3) > a').click({ force: true })
    cy.wait(2000)
    cy.get('#btn-new-cube').click({ force: true })
    cy.get('#description').type('DRE')
    cy.get('[id=dimensions-selectized]').type('ANO MES{enter}')
    cy.get('[id=dimensions-selectized]').type('DRE{enter}')
    cy.get('#description').click({ force: true })
    cy.get('[id=measures-selectized]').type('VALOR{enter}')

    cy.get('#save-cube').click({ force: true })
    cy.wait(5000)
    cy.get('.pull-right > .btn-primary').dblclick({ force: true })
    cy.wait(2000)
    cy.get('#description')
    cy.get(':nth-child(3) > .col-xs-5 > .selectize-control > .selectize-input').type('DRE{enter}')
    cy.get(':nth-child(5) > .col-xs-5 > .selectize-control > .selectize-input').type('ANO MES{enter}')
    cy.get('#save-spreadsheet').click({ force: true })

    cy.wait(5000)
    cy.get('.navbar-brand').click({ force: true })
    cy.wait(2000)
  })
  it('Visitando relatório', () => {
    cy.get('#dropdown-spreadsheets-toggle > .dropdown-toggle').click({ force: true })
    cy.wait(3000)
    cy.get('.list-group-item-heading').click({ force: true })
    cy.wait(3000)
  })
  it('Adicionando valores de receita e gastos', () => {
    cy.get('[id=username]').should('be.visible')
    cy.get('[id=username]').type(config.user, { force: true });
    cy.get('[id=password]').type(config.password, { force: true });
    cy.get('.button').click({ force: true })
    cy.wait(3000)
    cy.get('#dropdown-spreadsheets-toggle > .dropdown-toggle').click({ force: true })
    cy.wait(3000)
    cy.get('.list-group-item-heading').click({ force: true })
    cy.wait(6000)
    cy.get(':nth-child(2) > [data-col="2"]').click({ force: true }).type('2000{enter}')
    cy.get(':nth-child(3) > [data-col="2"]').click({ force: true }).type('3000{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="3"]').click({ force: true }).type('2000{enter}')
    cy.get(':nth-child(3) > [data-col="3"]').click({ force: true }).type('3000{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="4"]').click({ force: true }).type('1000{enter}')
    cy.get(':nth-child(3) > [data-col="4"]').click({ force: true }).type('8000{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="5"]').click({ force: true }).type('1800{enter}')
    cy.get(':nth-child(3) > [data-col="5"]').click({ force: true }).type('8000{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="6"]').click({ force: true }).type('10000{enter}')
    cy.get(':nth-child(3) > [data-col="6"]').click({ force: true }).type('8000{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="7"]').click({ force: true }).type('2000{enter}')
    cy.get(':nth-child(3) > [data-col="7"]').click({ force: true }).type('8200{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="8"]').click({ force: true }).type('3500{enter}')
    cy.get(':nth-child(3) > [data-col="8"]').click({ force: true }).type('8200{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="9"]').click({ force: true }).type('3100{enter}')
    cy.get(':nth-child(3) > [data-col="9"]').click({ force: true }).type('8200{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="10"]').click({ force: true }).type('4000{enter}')
    cy.get(':nth-child(3) > [data-col="10"]').click({ force: true }).type('8200{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="11"]').click({ force: true }).type('2120{enter}')
    cy.get(':nth-child(3) > [data-col="11"]').click({ force: true }).type('8200{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="12"]').click({ force: true }).type('3500{enter}')
    cy.get(':nth-child(3) > [data-col="12"]').click({ force: true }).type('8200{enter}')
    cy.wait(1000)
    cy.get(':nth-child(2) > [data-col="13"]').click({ force: true }).type('6000{enter}')
    cy.get(':nth-child(3) > [data-col="13"]').click({ force: true }).type('16000{enter}')
    cy.wait(1000)
  })
})
