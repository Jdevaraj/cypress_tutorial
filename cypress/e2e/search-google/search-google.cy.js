describe("Searching in google", () => {
  it("searching in google page and enter", () => {
    cy.visit("https://www.google.com");
    cy.get(".SDkEP");
    cy.get("#APjFqb").type("testing{enter}");
    // cy.get("div span a h3").first().click();
    // cy.get("#cnt").scrollTo(50, 50);
    cy.get("div span a h3").first().click();
    // cy.go(-1);
  });
});
