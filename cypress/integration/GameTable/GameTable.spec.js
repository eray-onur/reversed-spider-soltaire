export {};

describe('GameTable domain integration tests', () => {

    let mockData = {};

    before(() => {
        cy.fixture('mockdata').then((data) => {
            mockData = data;
        })
    })

    it('should show nickname in game session', () => {

        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.validNickName);
        cy.contains('Start').trigger('click');
    
        cy.get('.nickname-value').contains(mockData.validNickName).should('exist');
        
    })
    
    it('time counter works properly', () => {
        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.validNickName);
        cy.contains('Start').trigger('click');
    
        cy.get('.counter').should('exist');
    })
    
    it('should go back to main menu when clicked "Forfeit Game"', () => {
        
        
        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.validNickName);
        cy.contains('Start').trigger('click');
    
        cy.contains('Forfeit').trigger('click');
    
        cy.wait(150);
        cy.contains('Spider Solitaire').should('exist');
    })
    
    it('should increase stack sizes when spare stack is clicked', () => {
        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.validNickName);
        cy.contains('Start').trigger('click');
    
        cy.get('.spare-stack').trigger('click');
    
        cy.get('.card-stack').children().should('have.length.above', 6);
    
    })
});




