describe("add lid", () =>
{
    beforeEach(() =>
    {
        cy.login('ben.arts@hogent.be', '12345678');
    });


    it("add lid", () =>
    {
        cy.visit('http://localhost:3000/leden');
        cy.get('[data-cy=add_lid_btn]').click();
        cy.get('[data-cy=voornaam_input]').type("Arend");
        cy.get('[data-cy=achternaam_input]').type("Peters");
        cy.get('[data-cy=voeg_toe_lid]').click();

        cy.get('[data-cy=voornaam]').eq(0).contains("Arend");
        cy.get('[data-cy=achternaam]').eq(0).contains("Peters");
    });

    it("delete lid", () =>
    {
        cy.visit('http://localhost:3000/leden');
        cy.get('[data-cy=lid_delete').eq(0).click();
        cy.get('[data-cy=voornaam]').eq(0).contains("Arend").not();
    });
});