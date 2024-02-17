describe("Include/Exclude Demo", () => {
  it.skip("Test 1", () => {
    cy.log("Test 1");
  });

  it.skip("Test 2", () => {
    cy.log("Test 2");
  });

  it.only("Test 3", () => {
    cy.log("Test 3");
  });

  it.only("Test 4", () => {
    cy.log("Test 4");
  });
});
