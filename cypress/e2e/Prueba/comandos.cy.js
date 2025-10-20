
describe('comandos personalizados', () => {

    it('seleccion de elementos', () => {
        cy.get('[data-cy=btn-login]').click(); 
        cy.get('.list .item', { timeout: 10000 }).should('have.length', 10);  
        cy.get('.list .item').eq(0).should('contain.text', 'Item 1');
        cy.get('.list .item').children().should('have.length', 1); //elemento hijo que obtiene del padre
        cy.get('.list .item').clear(); //limpiar el elemento
        cy.get('.list .item').click(); //primer elemento
        cy.get('.list .item').clock(); //tiempo al primer elemento
        cy.get('.list .item').dblclick(); //doble click al primer elemento
        cy.get('.list .item').rightclick(); //click derecho al primer elemento
        cy.get('.list .item').contains('Item 1'); //contener texto dentro del elemento
        cy.get('.list .item').document(); //obtener el documento del elemento
        cy.get('.list .item').window(); //obtener la ventana del elemento
        cy.get('.list .item').screenshot(); //tomar screenshot del elemento
        cy.get('.list .item').end(); //terminar la cadena de comandos
        cy.get('.list .item').each(($el, index, $list) => {
            // iterar sobre cada elemento
            expect($list).to.have.length(10);
            expect($el).to.contain.text(`Item ${index + 1}`);
        });
        cy.get('.list .item').should('be.visible'); //filtrar elementos visibles
        
        cy.contains('ACCEDER').click()
        cy.contains('ACCEDER').should('be.visible') //filtrar elementos visibles
        cy.contains('ACCEDER').should('have.text', 'ACCEDER') //filtrar elementos por texto exacto
        cy.contains('ACCEDER').should('include.text', 'ACCE') //filtrar elementos que incluyan texto
        cy.contains('ACCEDER').should('not.include.text', 'ACCE123') //filtrar elementos que no incluyan texto
        cy.contains('ACCEDER').execute(); //ejecutar el comando
        cy.contains('ACCEDER').intercept(); //interceptar el comando
        cy.contains('ACCEDER').invoke('text'); //invocar el comando
        cy.contains('ACCEDER').parent(); //obtener el elemento padre
        cy.contains('ACCEDER').parents(); //obtener todos los elementos padres
        cy.contains('ACCEDER').siblings(); //obtener elementos hermanos
        cy.contains('ACCEDER').pressKeys('{enter}'); //presionar tecla enter
        cy.contains('ACCEDER').scrollIntoView(); //hacer scroll hasta el elemento
        cy.contains('ACCEDER').wait(1000); //esperar 1 segundo
        cy.contains('ACCEDER').writeFile('cypress/fixtures/archivo.txt', 'Hola Mundo'); //escribir en un archivo
        cy.contains('ACCEDER').readFile('cypress/fixtures/archivo.txt').then((text) => {
            expect(text).to.eq('Hola Mundo');
        });

        cy.find('ACCEDER').click();
        cy.within(() => {
            cy.get('.list .item').should('have.length', 10);
        cy.root(); //volver al elemento raiz
    });

    it('acciones de usuario', () => {
        cy.get('input[type=checkbox]').click({ multiple: true });
        cy.get('input[type=checkbox]').check({ force: true });
        cy.get('input[type=checkbox]').type("Texto de prueba", { delay: 100 }, { force: true }, { parseSpecialCharSequences: false }, { timeout: 10000 });
        cy.get('input[type=checkbox]').focus().type("Texto de prueba");
        cy.get('input[type=checkbox]').clear();
        cy.get('input[type=checkbox]').select('option1');
        cy.get('input[type=checkbox]').uncheck({ force: true }); //desmarcar checkbox
        cy.get('input[type=checkbox]').trigger('submit'); //disparar evento submit
        cy.get('input[type=checkbox]').trigger('mouseover');//bajar al elemento
        cy.get('input[type=checkbox]').trigger('mouseout');//subir del elemento
        cy.get('input[type=checkbox]').trigger('mousedown');//click sostenido
        cy.get('input[type=checkbox]').trigger('mouseup');//soltar click
        cy.get('input[type=checkbox]').trigger('mousemove');//mover mouse
        cy.get('input[type=checkbox]').dblclick(); //doble click
        cy.get('input[type=checkbox]').rightclick(); //click derecho

 it('aserciones y checks', () => {
    cy.get('input[type=checkbox]').should('be.checked'); //verificar que el checkbox este seleccionado
    cy.get('input[type=checkbox]').should('not.be.checked'); //verificar que el checkbox no este seleccionado
    cy.get('input[type=checkbox]').should('be.visible'); //verificar que el elemento sea visible
    cy.get('input[type=checkbox]').should('not.be.visible'); //verificar que el elemento no sea visible

    cy.get('input[type=checkbox]').should('have.value', 'Texto de prueba');//verificar que el elemento tenga el valor
    cy.get('input[type=checkbox]').should('have.attr', 'type', 'checkbox'); //verificar que el elemento tenga el atributo type con valor checkbox
    cy.get('input[type=checkbox]').should('have.css', 'display', 'block'); //verificar que el elemento tenga la propiedad css display con valor block
    cy.get('input[type=checkbox]').should('have.class', 'checkbox-class');//verificar que el elemento tenga la clase checkbox-class
    cy.get('input[type=checkbox]').should('exist');//verificar que el elemento exista en el DOM
    cy.get('input[type=checkbox]').should('not.be.disabled');//verificar que el elemento no este deshabilitado
 });


 cy.get('input[type=checkbox]').should('not.be.disabled').and('be.visible');//verificar que el elemento no este deshabilitado

 cy.get('input[type=checkbox]').expect(1000).to.exist; //esperar a que el elemento exista en el DOM
 cy.get('input[type=checkbox]').expect(1000).to.be.visible; //esperar a que el elemento sea visible
    cy.get('input[type=checkbox]').expect(1000).to.have.class('checkbox-class').click(); //esperar a que el elemento tenga la clase checkbox-class

});
});

})