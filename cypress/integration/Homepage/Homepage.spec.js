export {}; // Dummy export to convert this script into an object.

describe('Homepage integration tests', () => {

    let mockData = {};

    before(() => {
        cy.fixture('mockdata').then((data) => {
            mockData = data;
        })
    })

    it('should be able to enter valid nickname', () => {
        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.validNickName);
        cy.contains('Start').trigger('click');
    
        cy.get('.deck').should('exist');
    
    })
    
    it('should show alert if entered nickname is invalid', () => {

        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.invalidNickName);
        cy.contains('Start').trigger('click');

        cy.get('.alert-title').first().should((element) => {
            expect(element.text()).to.equal('Please enter a valid nickname.');
        });
        
    })
    
    it('should show up tutorial section when clicked "How to Play"', () => {
        cy.visit(mockData.homeUrl);
        
        cy.contains('How to Play').trigger('click');
    
        cy.contains('Tutorial').should('exist');
    
    })
})


