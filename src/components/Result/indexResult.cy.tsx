import React from 'react'
import Result from './index'

describe('<Result />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Result />)
  })
})