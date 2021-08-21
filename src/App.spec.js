import React from 'react';
import { mount } from '@cypress/react';
import Homepage from './Homepage/Homepage';

it('renders app title correctly', () => {
  mount(<Homepage />);
  cy.get('h1').contains('Spider Soltaire');
});