import { fireEvent, render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

test('Title "Spider Soltaire" should be rendered', () => {
    render(<Homepage/>);
    const gameTitle = screen.getByText(/spider soltaire/i);

    expect(gameTitle).toBeInTheDocument();
});



// import React from 'react';
// import { mount } from '@cypress/react';
// import Homepage from './Homepage/Homepage';

// it('renders app title correctly', () => {
//   mount(<Homepage />);
//   cy.get('h1').contains('Spider Soltaire');
// });