describe("Flujo completo de Property Access Details - dos flujos", () => {

    const dashboardUrl = "https://borrower-dashboard.sandbox.constlending.com/";
    const resetUrl = "https://borrower-processing-team.sandbox.constlending.com/";

    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("Illegal return statement")) {
            return false; // ignorar solo este error
        }
        return true; // cualquier otro error falla el test
    });

    const loginDashboard = () => {
        cy.visit(dashboardUrl);
        cy.get('input[placeholder="Email address"]').type("karen+test@mvp.com.co");
        cy.get('input[placeholder="Password"]').type("Password@");
        cy.get('button[type="submit"]').click();
        cy.get(".ant-btn").contains("Close X").click({ force: true });
    };

    const validarFlujo = (opcion) => {

        // NOT STARTED- CARDS - DASHBOARD
        cy.get(".state-name.state-name-w6").eq(0).contains("NOT STARTED").should("be.visible");
        cy.get(".body-small.body-small-up").eq(0).contains("quick task").should("be.visible");
        cy.get(".h4").eq(0).contains("Property Access Details").should("be.visible");
        cy.get(".body-card").eq(1).contains("The main contact for the property is").should("be.visible");
        cy.get(".body-card-full").eq(0).contains("unknown").should("be.visible");
        cy.get(".ant-btn.css-1esm1do.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.button-open-modal.button-open-modal-DRAFT").eq(0).contains("Begin Task").click();

        //Verificar copys en Property Access Details - contain main

        cy.get(".h3").contains("Welcome, test! We need a few things to get you approved for your loan.").should("be.visible");
        cy.get(".h2").eq(1).contains("Who will be coordinating access for appraisers and other vendors?").should("be.visible");


        //Verificar copys en Property Access Details - Task Summary

        cy.get(".title-summary").eq(0).contains("Task summary").should("be.visible");
        cy.get(".description").contains("The main contact for the property is").should("be.visible");
        cy.get(".body-card.body-card-w6").contains("PROPERTY ACCESS DETAILS").should("be.visible");

        //Flujo del Me
        cy.get('.h4.Button-option-text').eq(0).contains("Me").click();

        //Verificar copys de modales - Ready to submit
        cy.get('.h2').eq(3).contains("Ready to submit?").should("be.visible");
        cy.get('.h4.h4-w4').contains("After submitting, you’ll have to contact us if you want to make changes to the property access details").should("be.visible");
        cy.get(".ant-btn.css-1esm1do.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.button.button-modal-ok").contains("Yes, this is correct").should("be.visible");
        cy.get(".ant-btn.css-1esm1do.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.button.button-modal-cancel").contains("I want to make changes").should("be.visible");
        cy.get('button[type="submit"]').contains("Yes, this is correct").click();


        //Verificar copys de modales - 
        cy.get('.h2').eq(3).contains("Great job!").should("be.visible");
        cy.get('.h4.h4-w4').contains("You just completed a task. We´ll review the information you submitted and contact you if we need any changes.").should("be.visible");
        cy.get('button[type="submit"]').contains("Back to dashboard").click();

        // IN REVIEW - CARDS - DASHBOARD
        cy.get(".state-name.state-name-w6").eq(0).contains("IN REVIEW").should("be.visible");
        cy.get(".body-card").eq(1).contains("The main contact for the property is").should("be.visible");
        cy.get(".body-card-full").eq(0).contains("me").should("be.visible");
        cy.get(".body-card.body-card-REVIEW.body-card-w5").contains("test karen").should("be.visible");
        cy.get('button[type="button"]').contains("View task").click();

        // IN REVIEW - MAIN CONTENT
        cy.get(".tag-name.state-name-w6").contains("IN REVIEW").should("be.visible");
        cy.get(".h3").contains("Welcome, test! We need a few things to get you approved for your loan.").should("be.visible");
        cy.get(".h2").eq(1).contains("Who will be coordinating access for appraisers and other vendors?").should("be.visible");

        // IN REVIEW - Task Summary
        cy.get(".title-summary").eq(0).contains("Task summary").should("be.visible");
        cy.get(".description").contains("The main contact for the property is test karen").should("be.visible");
        cy.get(".body-card.body-card-w6").contains("PROPERTY ACCESS DETAILS").should("be.visible");
        cy.wait(60000);
        cy.reload();

        // APPROVED - CARDS - DASHBOARD
        cy.get(".state-name.state-name-w6").eq(0).contains("APPROVED").should("be.visible");
        cy.get(".body-card").eq(1).contains("The main contact for the property is").should("be.visible");
        cy.get(".body-card-full").eq(0).contains("me").should("be.visible");
        cy.get(".body-card.body-card-APPROVED.body-card-w5").contains("test karen").should("be.visible");
        cy.get('button[type="button"]').contains("View task").click();

        // APPROVED - Task Summary
        cy.get(".title-summary").contains("Task summary").should("be.visible");
        cy.get(".description").contains("The main contact for the property is test karen").should("be.visible");
        cy.get(".body-card.body-card-w6").contains("PROPERTY ACCESS DETAILS").should("be.visible");

        // APPROVED - MAIN CONTENT
        cy.get(".h3").contains("Welcome, test! We need a few things to get you approved for your loan.").should("be.visible");
        cy.get(".h2").eq(1).contains("Who will be coordinating access for appraisers and other vendors?").should("be.visible");
        cy.get('.body-regular.body-regular-title').contains("You've completed this task.").should("be.visible");
        cy.get('button[type="button"]').contains("Back to dashboard").click();
    };

    const reiniciarTarea = () => {
        cy.visit(resetUrl);

        // Iniciar sesión como admin
        cy.get('input[placeholder="Email address"]').type("admin@test.com");
        cy.get('input[placeholder="Password"]').type("admintest");
        cy.get('button[type="submit"]').click();

        // Buscar el loan y abrirlo
        cy.get('input[type="text"][placeholder="Filter by borrower or loan address"]').type("Dallas, Texas");
        cy.get('.action-container').contains("View loan details -->").eq(0).click();


        // Click en el primer resultado
        cy.get('.ant-btn.css-dev-only-do-not-override-zl9ks2.ant-btn-default.button.button-submit.button.button-submit-delete').eq(0).click();
        cy.get('.h2').contains("Are you sure you want to restart this task? All progress and responses will be reset. This action cannot be undone.").should("be.visible");
        cy.get('.buttons').contains("Yes, delete this task").click();

        // Volver al dashboard
    };

    const loginDashboard2 = () => {
        cy.visit(dashboardUrl);
        cy.get('input[placeholder="Email address"]').type("karen+test@mvp.com.co");
        cy.get('input[placeholder="Password"]').type("Password@");
        cy.get('button[type="submit"]').click();

        //Flujo del Someone else
        cy.get('.h4.Button-option-text').eq(1).contains("Someone else").click();
        cy.get('input[placeholder="First name"]').type("test");
        cy.get('input[placeholder="Last name"]').type("Karen");
        cy.get('input[type="email"][placeholder="Email address"]').type("persona@test.com");
        cy.get('input[type="text"][placeholder="Phone number"]').type("1234567890");
        cy.get('button[type="button"]').contains("Submit and complete task").click();

        //Verificar copys de modales - Ready to submit
        cy.get('.h2').eq(3).contains("Ready to submit?").should("be.visible");
        cy.get('.h4.h4-w4').contains("After submitting, you’ll have to contact us if you want to make changes to the property access details").should("be.visible");
        cy.get(".ant-btn.css-1esm1do.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.button.button-modal-ok").contains("Yes, this is correct").should("be.visible");
        cy.get(".ant-btn.css-1esm1do.ant-btn-default.ant-btn-color-default.ant-btn-variant-outlined.button.button-modal-cancel").contains("I want to make changes").should("be.visible");
        cy.get('button[type="submit"]').contains("Yes, this is correct").click();


        //Verificar copys de modales - 
        cy.get('.h2').eq(4).contains("Great job!").should("be.visible");
        cy.get('.h4.h4-w4').contains("You just completed a task. We´ll review the information you submitted and contact you if we need any changes.").should("be.visible");
        cy.get('button[type="submit"]').contains("Back to dashboard").click();

        // IN REVIEW - CARDS - DASHBOARD
        cy.get(".state-name.state-name-w6").eq(0).contains("IN REVIEW").should("be.visible");
        cy.get(".body-card").eq(1).contains("The main contact for the property is").should("be.visible");
        cy.get(".body-card-full").eq(0).contains("someone else").should("be.visible");
        cy.get(".body-card.body-card-REVIEW.body-card-w5").eq(0).contains("test Karen").should("be.visible");
        cy.get('button[type="button"]').contains("View task").click();

        // IN REVIEW - MAIN CONTENT
        cy.get(".tag-name.state-name-w6").contains("IN REVIEW").should("be.visible");
        cy.get(".h3").contains("Welcome, test! We need a few things to get you approved for your loan.").should("be.visible");
        cy.get(".h2").eq(1).contains("Who will be coordinating access for appraisers and other vendors?").should("be.visible");

        // IN REVIEW - Task Summary
        cy.get(".title-summary").eq(0).contains("Task summary").should("be.visible");
        cy.get(".description").eq(0).contains("The main contact for the property is test Karen").should("be.visible");
        cy.get(".body-card.body-card-w6").eq(0).contains("PROPERTY ACCESS DETAILS").should("be.visible");
        cy.wait(60000);
        cy.reload();

        // APPROVED - CARDS - DASHBOARD
        cy.get(".state-name.state-name-w6").eq(0).contains("APPROVED").should("be.visible");
        cy.get(".body-card").eq(1).contains("The main contact for the property is").should("be.visible");
        cy.get(".body-card-full").eq(0).contains("someone else").should("be.visible");
        cy.get(".body-card.body-card-APPROVED.body-card-w5").eq(0).contains("test Karen").should("be.visible");
        cy.get('button[type="button"]').contains("View task").click();

        // APPROVED - Task Summary
        cy.get(".title-summary").contains("Task summary").should("be.visible");
        cy.get(".description").eq(0).contains("The main contact for the property is test Karen").should("be.visible");
        cy.get(".body-card.body-card-w6").contains("PROPERTY ACCESS DETAILS").should("be.visible");

        // APPROVED - MAIN CONTENT
        cy.get(".h3").contains("Welcome, test! We need a few things to get you approved for your loan.").should("be.visible");
        cy.get(".h2").eq(1).contains("Who will be coordinating access for appraisers and other vendors?").should("be.visible");
        cy.get('.body-regular.body-regular-title').contains("You've completed this task.").should("be.visible");
        cy.get('button[type="button"]').contains("Back to dashboard").click();

    };

    it("Flujo 1: Dashboard - Completar el flujo de Me", () => {
        loginDashboard();
        validarFlujo("Me");
    });

    it("Flujo 2: Processing - Reiniciar tarea", () => {
        reiniciarTarea();
    });

    it("Flujo 3: Dashboard - Completar el flujo de Someone else", () => {
        loginDashboard2();
        validarFlujo("Someone else");
    });


});