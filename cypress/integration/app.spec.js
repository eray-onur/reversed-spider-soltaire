export {}; // Dummy export to convert this script into an object.

const nicknameToEnter = 'erayonur45';

it('should visit the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('have.text', 'Spider Solitaire');
});

it('should redirect back to homepage if user typed game route in browser', () => {
    cy.visit('http://localhost:3000/game');

    cy.get('h1').should('have.text', 'Spider Solitaire');
});

it('should redirect to homepage if user reloaded the page', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.reload();
    cy.get('h1').should('have.text', 'Spider Solitaire');
})

it('should be able to enter valid nickname', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.deck').should('exist');

});

it('should show alert if entered nickname is invalid', () => {
    const invalidNickname = 'er';
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(invalidNickname);
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

    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.nickname-value').contains(nicknameToEnter).should('exist');
    
});

it('time counter works properly', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.counter').should('exist');
});

it('should go back to main menu when clicked "Forfeit Game"', () => {
    
    
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.contains('Forfeit').trigger('click');

    cy.wait(150);
    cy.contains('Spider Solitaire').should('exist');
});

it('should increase stack sizes when spare stack is clicked', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type=text]').type(nicknameToEnter);
    cy.contains('Start').trigger('click');

    cy.get('.spare-stack').trigger('click');

    cy.get('.card-stack').children().should('have.length.above', 6);

});

// it('"Hint" button is clickable', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('h1').should('have.text', 'Spider Soltaire');
// });

// it('should make player score decrease when a hint is spent', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('h1').should('have.text', 'Spider Soltaire');
// });
