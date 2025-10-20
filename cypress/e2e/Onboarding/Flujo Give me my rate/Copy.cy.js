describe("Mensajes y Copys", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.wait(5000);
        cy.get(".rate").click();
        cy.wait(5000);
    });

    it("Verificar Where is the property located?", () => {
        cy.get(".info").contains("Where is the property located?").should("be.visible");
        
    });

    it("Verificar What condition is the property in?", () => {
        cy.get(".info .title").contains("What condition is the property in?").should("be.visible");
        cy.contains("It needs some repairs and/or construction").click({ force: true });
    });

    it("Verificar What is your ideal loan length?", () => {
        cy.get(".info .title").contains("What is your ideal loan length?").should("exist");
        cy.contains("Short-term (12 months)").click();
    });

    it("Do you currently own this property?", () => {
        cy.get(".info .title").contains("Do you currently own this property?").should("exist");
        cy.contains("Yes, I want to refinance").click();
    });

    it("What kind of property is it?", () => {
        cy.get(".info .title").contains("What kind of property is it?").should("exist");
        cy.contains("2-4 unit property").click();
    });

    it("What kind of property is it?", () => {
        cy.get(".info .title").contains("What kind of property is it?").should("exist");
        cy.contains("2-4 unit property").click();
    });

    it("What’s your credit score?", () => {
        cy.get(".info .title").contains("What’s your credit score?").should("exist");
        cy.contains("680-699").click();

        it("How many properties have you purchased/sold in the last 36 months?", () => {
        cy.get(".info .title").contains("How many properties have you purchased/sold in the last 36 months?").should("exist");
        cy.contains("1-2 properties").click();

        });
    });
});