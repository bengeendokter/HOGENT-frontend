Cypress.Commands.add('login', (email, password) =>
{
	cy.visit('http://localhost:3000/login');
	cy.get('[data-cy=email_input]').type(email);
	cy.get('[data-cy=password_input]').type(password);
	cy.get('[data-cy=submit_btn]').click();
});