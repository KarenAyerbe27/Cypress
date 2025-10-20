
    describe('Mensajes y Copys', () => {
        beforeEach(() => {
            cy.visit('/', { failOnStatusCode: false }); // evitar fallo si la pagina no carga
            //cy.reload({ force: true});// recargar pagina
            //cy.go('back'); // volver a la pagina anterior
            //cy.go('forward'); // volver a la pagina siguiente
            cy.viewport(1280, 720); // establecer tamaño de pantalla
            //cy.viewport('iphone-15'); // establecer tamaño de pantalla a iphone-15
        });

        it('Verificar mensaje de bienvenida', () => {
            cy.verificarCopyExacto('.phrase', '"Dealing with multiple lenders is SO exhausting and wondering if I\'d get financing made me apprehensive about chasing deals. Thanks to you, I can just focus on buying properties!"');    
        });

        it('Verificar copy - Real estate investor', () => {
            cy.verificarCopyExacto('.author', 'Chandra MReal estate investor');
        });

        it('Verificar Questions y numero telefonico', () => {
            cy.verificarCopyExacto('.question-text', 'Text or call us at')
            cy.verificarCopyExacto('.phone-number', '(203) 423-3534');
        });

        it('Verificar copy de Price your loan', () => {
            cy.verificarCopyExacto('.welcome', "Price your loan with Constitution Lending!We’re going to ask you a few questions to get you the most accurate term sheet. If you don’t know something, just estimate. Also, please note, we only do loans for investment properties.");
        });

        
        it('Verificar copy - Give me my rate', () => {
            cy.verificarCopyExacto('.rate', 'Give me my rate!');
        });

        it('Verificar copy - Broker', () => {
            cy.verificarCopyExacto('.broker', 'I’m a broker -->');
        });

        it('Verificar copy - Cuenta', () => {
            cy.verificarCopyExacto('.account', 'Already have an account? Sign in');
        });


        
    });