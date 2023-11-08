import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })

  it('validate Input', () => {
    cy.mount(<App />)

    cy.get('[data-testid="bill"]').type('0');
    cy.get('[data-testid="error-bill"]').should('have.text', "Can't be zero");

    cy.get('[data-testid="tip"]').type('0');
    cy.get('[data-testid="error-tip"]').should('have.text', "Can't be zero");

    cy.get('[data-testid="people"]').type('0');
    cy.get('[data-testid="error-people"]').should('have.text', "Can't be zero");
  })

  it('calculate the correct result', () => {
    cy.mount(<App />)

    cy.get('[data-testid="bill"]').type('142.55');

    cy.get('[data-testid="tip-15"]').click();

    cy.get('[data-testid="people"]').type('5');

    cy.get('[data-testid="amount"]').should('have.text', "$4.28");
    cy.get('[data-testid="total"]').should('have.text', "$32.79");
  })

  it('reset the app', () => {
    cy.mount(<App />)

    cy.get('[data-testid="bill"]').type('142.55');
    cy.get('[data-testid="tip-15"]').click();
    cy.get('[data-testid="people"]').type('5');

    cy.get('[data-testid="reset"]').click();

    cy.get('[data-testid="bill"]').should('have.text', "");
    cy.get('[data-testid="people"]').should('have.text', "");
    cy.get('[data-testid="amount"]').should('have.text', "$0.00");
    cy.get('[data-testid="total"]').should('have.text', "$0.00");
  })
})