import './Dashboard/propertyaccessdetails/commands'
import './Onboarding - Mensajes y Copys/commands'

Cypress.Commands.add('verificarCopyExacto', (selector, textoEsperado) => {
    cy.get(selector, { timeout: 10000 })
    .should('be.visible')
    .invoke('text')
    .then((text) => {
        const normalizado = text.trim().replace(/\s+/g, ' ');
        expect(normalizado).to.eq(textoEsperado);
    });
});