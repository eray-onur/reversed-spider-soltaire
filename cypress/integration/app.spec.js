export {}; // Dummy export to convert this script into an object.



describe('General app integration tests', () => {

    let mockData = {};

    before(() => {
        cy.fixture('mockdata').then((data) => {
            mockData = data;
        })
    })

    it('should visit the homepage', () => {
        cy.visit(mockData.homeUrl);
        cy.get('h1').should('have.text', 'Spider Solitaire');
    });
    
    it('should redirect back to homepage if user typed game route in browser', () => {
        cy.visit(mockData.gameUrl, {
            onBeforeLoad: win => {
                win.sessionStorage.clear();
                win.localStorage.clear();
            }
        });
        cy.get('h1').should('have.text', 'Spider Solitaire');
    });
    
    it('should redirect to homepage if user reloaded the page', () => {
        cy.visit(mockData.homeUrl);
    
        cy.get('input[type=text]').type(mockData.validNickName);
        cy.contains('Start').trigger('click');
    
        cy.reload();
        cy.get('h1').should('have.text', 'Spider Solitaire');
    });
});


