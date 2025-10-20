describe("Flujo de Fix and Flip", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(5000);
        cy.get(".rate").click();
    });

    it("Verificar opciones", () => {
        //Where is the property located?
        cy.get(".info")
            .contains("Where is the property located?")
            .should("be.visible");
        cy.get(".ant-select-selector").click();
        cy.get(
            "#root > div > div > div.page-main > div.page-content-wrapper > div.ant-select-dropdown.css-dev-only-do-not-override-15rg2km.ant-select-dropdown-placement-bottomLeft > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div"
        ).click();

        //"Verificar What condition is the property in?"
        cy.get(".info .title")
            .contains("What condition is the property in?")
            .should("be.visible");
        cy.contains("It needs some repairs and/or construction").click({
            force: true,
        });

        //"Verificar What is your ideal loan length?"
        cy.get(".info .title")
            .contains("What is your ideal loan length?")
            .should("exist");
        cy.contains("Short-term (12 months)").click();

        //"Do you currently own this property?"
        cy.get(".info .title")
            .contains("Do you currently own this property?")
            .should("exist");
        cy.contains("Yes, I want to refinance").click();

        //"What kind of property is it?"
        cy.get(".info .title")
            .contains("What kind of property is it?")
            .should("exist");
        cy.contains("2-4 unit property").click();

        //What kind of property is it?"
        cy.get(".info .title")
            .contains("What kind of property is it?")
            .should("exist");
        cy.contains("2-4 unit property").click();

        //"What’s your credit score?"
        cy.get(".info .title")
            .contains("What’s your credit score?")
            .should("exist");
        cy.contains("680-699").click();

        //it("How many properties have you purchased/sold in the last 36 months?", () => {
        cy.get(".info .title")
            .contains(
                "How many properties have you purchased/sold in the last 36 months?"
            )
            .should("exist");
        cy.contains("1-2 properties").click();

        const textosEsperados = [
            "12-month bridge",
            "12-month fix-and-flip",
            "30-year rental",
        ];

        // Abrir el dropdown
        cy.get(
            "#root > div > div > div.page-main > div.page-content-wrapper > div.page-content.wide > div.step-section.resume.processing > div.resume-content > div:nth-child(1) > span:nth-child(1) > div > div"
        ).click(); // abrir dropdown

        textosEsperados.forEach((texto) => {
            cy.get(".ant-select-item.ant-select-item-option")
                .contains(texto)
                .should("exist");
        });

        // Seleccionar aleatoriamente una opción
        cy.get(".ant-select-item.ant-select-item-option").then(($options) => {
            cy.wrap($options)
                .eq(Cypress._.random(0, $options.length - 1))
                .click({ force: true });
        });

        const subtipo = ["refinance", "purchase"];

        // Abrir el dropdown
        cy.get(".option .ant-select-selector").eq(2).click(); // abrir dropdown

        subtipo.forEach((texto) => {
            cy.get(".ant-select-item.ant-select-item-option")
                .contains(texto)
                .should("exist");
        });

        // Seleccionar aleatoriamente una opción
        cy.get(".ant-select-item.ant-select-item-option").then(($options) => {
            cy.wrap($options)
                .eq(Cypress._.random(0, $options.length - 1))
                .click({ force: true });
        });

        const property = [
            "single-family home",
            "2-4 unit property",
            "portfolio",
            "warrantable condo",
            "non-warrantable condo",
            "5-20 unit property",
            "mixed-use property",
        ];

        // Abrir el dropdown
        cy.get(".option .ant-select-selector").eq(1).click(); // abrir dropdown

        property.forEach((texto) => {
            cy.get(".ant-select-item.ant-select-item-option")
                .contains(texto)
                .should("exist");
        });

        // Seleccionar aleatoriamente una opción
        cy.get(".ant-select-item.ant-select-item-option").then(($options) => {
            cy.wrap($options)
                .eq(Cypress._.random(0, $options.length - 1))
                .click({ force: true });
        });


        cy.get(".loan-options-button").click();
        cy.wait(5000);
        cy.get(".loan-options-container")
            .find(".loan-option")
            .then(($divs) => {
                const total = $divs.length;
                const randomIndex = Math.floor(Math.random() * total);
                cy.wrap($divs[randomIndex]).click();
                cy.log(`✅ Click en el div aleatorio (#${randomIndex + 1})`);
                console.log(`✅ Click en el div aleatorio (#${randomIndex + 1})`);
            });


            // Diligenciar el formulario
        cy.get('input[placeholder="First name"]').type("test");
        cy.get('input[placeholder="Last name"]').type("karen");
        cy.get('input[placeholder="Email address"]').type("lorenayerbe+856");
        cy.get('input[placeholder="Phone number"]').type("1234567890");
        cy.get('input[placeholder="Password"]').type("Password@");
        cy.get('input[placeholder="Confirm Password"]').type("Password@");
        cy.get('input[placeholder="Investment property address"]').type("Queens, NY, USA");


       
    });
});
