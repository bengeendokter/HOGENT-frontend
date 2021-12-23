describe("login", () =>
{
    it("should login", () =>
    {
        cy.login('ben.arts@hogent.be', '12345678');
    });
});