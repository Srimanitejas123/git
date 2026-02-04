Cypress.Commands.add("login", (username, password) => {
    cy.visit("/web/index.php/auth/login");
  cy.wait(3000);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').click({ force: true });
  
    cy.url().should("include", "/dashboard");
  });
  