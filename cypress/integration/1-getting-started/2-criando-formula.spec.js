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



    it('Criando nova fórmula', () => {
        cy.get('[id=username]').should('be.visible')
        cy.get('[id=username]').type(config.user, { force: true });
        cy.get('[id=password]').type(config.password, { force: true });
        cy.get('.button').click({ force: true })
        cy.wait(3000)
        cy.get('#dropdown-spreadsheets-toggle > .dropdown-toggle').click({ force: true })
        cy.wait(3000)
        cy.get('.list-group-item-heading').click({ force: true })
        cy.wait(6000)
        cy.get('#formula-icon > img').click({ force: true })
        cy.wait(1000)
        cy.get('#addFormula').should('be.visible')
        cy.wait(1000)
        cy.get('#addFormula').click({ force: true })
        cy.wait(2000)
        cy.get('#formulaName').clear()
        cy.get('#formulaName').type('Fórmula de economia mensal')
        cy.wait(1000)
        cy.get('#formulaUserExpression').type("['Economia do mês'] = ['Receita total'] - (1* ['Gastos Totais'])")
        cy.wait(2000)
        cy.get('#validateFormula').click({ force: true })
        cy.wait(4000)
        cy.get('#confirmChanges').click({ force: true })
        cy.wait(4000)
        cy.get('#chart-view-type-label').click({ force: true })
        cy.wait(5000)
    })
})