
it.only('Burbujas de Paso a Paso en Formulario cuando estan deshabilitados', () => {
        cy.visit("https://borrower-onboarding.sandbox.constlending.com/");
        cy.get('.rate').click();
        cy.wait(2000);

        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.bubble-navigator-container > div > div:nth-child(2)')
            .then(($btn) => {
            if ($btn.hasClass('disabled')) {
                cy.log('El botón está deshabilitado, no se puede hacer click, iniciando proceso de eleccion de opcion');
                cy.get('.ant-select-selector').click();
                cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.ant-select-dropdown.css-dev-only-do-not-override-15rg2km.ant-select-dropdown-placement-bottomLeft > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active').click();
                cy.log('Terminado el proceso de opciones en la primera burbuja')
            } else {
                cy.wrap($btn).click();
                cy.log('Se hizo click en el botón porque está habilitado');
            }
        });
    })

    it('Burbujas de Paso a Paso en Formulario cuando estan habilitados', () => {
        cy.visit("https://borrower-onboarding.sandbox.constlending.com/");
        cy.get('.rate').click();
        cy.wait(2000);
        cy.get('.ant-select-selector').click();
        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.ant-select-dropdown.css-dev-only-do-not-override-15rg2km.ant-select-dropdown-placement-bottomLeft > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active').click();

        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.bubble-navigator-container > div > div:nth-child(1)')
            .then(($selector) => {
            if ($selector.hasClass('disabled')) {
                cy.log('El botón está deshabilitado, no se puede hacer click, iniciando proceso de eleccion de opcion');
            } else {
                cy.wrap($selector).click();
                cy.log('Se hizo click en el botón porque está habilitado');
            }
        });
    })

/// <reference types="cypress" />

describe('Primera Pagina de Pruebas', () => {

    it.only('Navegar a la Pagina y click en Primer Elemento', () => {
        cy.visit("https://borrower-onboarding.sandbox.constlending.com/");
        cy.get('.rate').click();
        cy.wait(5000);
        cy.get('.ant-select-selector').click();
        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.ant-select-dropdown.css-dev-only-do-not-override-15rg2km.ant-select-dropdown-placement-bottomLeft > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click();
        cy.wait(2000);
        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.page-content > div:nth-child(2) > div.options > div:nth-child(2)').click();
        cy.get('p.text').should('exist');
    })

    it.only('Segunda Burbuja en Formulario cuando estan deshabilitados', () => {
        cy.visit("https://borrower-onboarding.sandbox.constlending.com/");
        cy.get('.rate').click();
        cy.wait(2000);
        
        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.bubble-navigator-container > div > div:nth-child(2)')
            .then(($btn) => {
            if ($btn.hasClass('disabled')) {
                cy.log('El botón está deshabilitado, no se puede hacer click, iniciando proceso de eleccion de opcion');
                cy.get('.ant-select-selector').click();
                cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.ant-select-dropdown.css-dev-only-do-not-override-15rg2km.ant-select-dropdown-placement-bottomLeft > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active').click();
                cy.log('Terminado el proceso de opciones en la primera burbuja')
            } else {
                cy.wrap($btn).click();
                cy.log('Se hizo click en el botón porque está habilitado');
            }
        });
    })

    it('Burbujas de Paso a Paso en Formulario cuando estan habilitados', () => {
        cy.visit("https://borrower-onboarding.sandbox.constlending.com/");
        cy.get('.rate').click();
        cy.wait(2000);
        cy.get('.ant-select-selector').click();
        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.ant-select-dropdown.css-dev-only-do-not-override-15rg2km.ant-select-dropdown-placement-bottomLeft > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active').click();

        cy.get('#root > div > div > div.page-main > div.page-content-wrapper > div.bubble-navigator-container > div > div:nth-child(1)')
            .then(($selector) => {
            if ($selector.hasClass('disabled')) {
                cy.log('El botón está deshabilitado, no se puede hacer click, iniciando proceso de eleccion de opcion');
            } else {
                cy.wrap($selector).click();
                cy.log('Se hizo click en el botón porque está habilitado');
            }
        });
    })
})