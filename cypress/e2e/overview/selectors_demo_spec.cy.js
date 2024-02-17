describe("Selector Playground", () => {
  it("should verify selector playground", () => {
    cy.visit("https://www.letskodeit.com");
    cy.get('[data-id="41189"] > .dynamic-link').click();
  });
});
