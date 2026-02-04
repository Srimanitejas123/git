import { user } from "../text/creds";

describe("OrangeHRM Login", () => {
    it("should login successfully", () => {
        cy.login(user.username, user.password);
  cy.wait(10000);
      cy.contains("Dashboard").should("be.visible").contains("Dashboard");
    });
  });
  