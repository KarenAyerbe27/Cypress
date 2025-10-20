
    describe('Botones y enlaces', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Verificar Boton Give', () => {
            cy.get('.rate').contains('Give me my rate!').click();
        });

        it('Verificar Enlace Broker', () => {
            cy.get('.broker').contains('I’m a broker -->').click();
        });

        it('Verificar Enlace Sign In', () => {
            cy.get('.account').contains('Already have an account? Sign in').click();
        });
        

        
    });