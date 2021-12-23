describe("add dag", () =>
{
    beforeEach(() =>
    {
        cy.login('ben.arts@hogent.be', '12345678');
    });


    it("add dag", () =>
    {
        cy.visit('http://localhost:3000/dagen');
        cy.get('[data-cy=add_dag_btn]').click();
        cy.get('[data-cy=datum_input]').type("1999-12-31");
        cy.get('[data-cy=voeg_toe_dag]').click();

        cy.get('[data-cy=dag_datum_19991231]').contains("1999-12-31");
    });

    it("add dag faalt", () =>
    {
        cy.visit('http://localhost:3000/dagen');
        cy.get('[data-cy=add_dag_btn]').click();
        cy.get('[data-cy=datum_input]').type("1999-12-31");
        cy.get('[data-cy=voeg_toe_dag]').click();

        cy.get("[data-cy=label_dagform_error").should("contain", "bestaat al");
    });

    it("delete dag", () =>
    {
        cy.visit('http://localhost:3000/dagen');
        cy.get('[data-cy=dag_delete_19991231').click();
        cy.get('[data-cy=dag_datum_19991231]').should('not.exist');
    });
});