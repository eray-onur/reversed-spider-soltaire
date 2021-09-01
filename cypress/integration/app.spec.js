export {}; // Dummy export to convert this script into an object.

it('should visit the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('have.text', 'Spider Solitaire');
});

it('should be able to enter valid nickname', () => {
    const nicknameToEnter = 'erayonur45';
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.deck').should('exist');

});

it('should show alert if entered nickname is invalid', () => {
    const nicknameToEnter = 'er';
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.on('window:alert', (text) => {
        expect(text).to.contains('Please enter a valid nickname.');
    });
});

it('should show up tutorial section when clicked "How to Play"', () => {
    cy.visit('http://localhost:3000');
    
    cy.contains('How to Play').trigger('click');

    cy.contains('Tutorial').should('exist');

});

it('should show nickname in game session', () => {

    const nicknameToEnter = 'erayonur45';
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.nickname-value').contains(nicknameToEnter).should('exist');
    
});

it('time counter works properly', () => {
    const nicknameToEnter = 'erayonur45';
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.counter').should('exist');
});

it('should go back to main menu when clicked "Forfeit Game"', () => {
    
    const nicknameToEnter = 'erayonur45';
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.contains('Forfeit').trigger('click');

    cy.wait(150);
    cy.contains('Spider Solitaire').should('exist');
});

it('should increase stack sizes when spare stack is clicked', () => {
    
});

// it('should show a valid hint when clicked "Show Hint"', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('h1').should('have.text', 'Spider Soltaire');
// });

// it('should make player score decrease when a hint is spent', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('h1').should('have.text', 'Spider Soltaire');
// });
