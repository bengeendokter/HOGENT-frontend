describe("mijn eerste test", () =>
{
    it("draait de applicatie", () =>
    {
        cy.visit('http://localhost:3000')
        cy.get("main").should("exist");
    });

    it("should login", () =>
    {
        cy.login('ben.arts@hogent.be', '12345678');
    });
});