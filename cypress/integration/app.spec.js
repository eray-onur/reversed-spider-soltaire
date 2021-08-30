export {}; // Dummy export to convert this script into an object.

it('should work', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('have.text', 'Spider Soltaire');
});