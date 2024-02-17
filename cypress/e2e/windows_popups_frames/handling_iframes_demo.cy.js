describe("Iframe Demo", () => {
  it("should work with elements inside iframe", () => {
    cy.visit("https://www.letskodeit.com/practice");

    cy.get("#courses-iframe").then(($frame) => {
      const searchField = $frame.contents().find('input[id="search"]');
      cy.wrap(searchField).type("selenium");
    });

    cy.get("#name").type("Outside Iframe");

    cy.get("#courses-iframe").then(($frame) => {
      const categoryField = $frame.contents().find('select[name="categories"]');
      cy.wrap(categoryField).select("JavaScript");
      cy.wrap(categoryField).select("All");
    });

    cy.get("#name").clear().type("Selected Dropdown");
    // cy.get("#alertbtn").click();

    // cy.get("#courses-iframe").then(($frame) => {
    //   const categoryField2 = $frame
    //     .contents()
    //     .find('select[name="categories"]');
    //   cy.wrap(categoryField2).select("All");
    //   //   cy.get("#course-list").should("have.text", "No course to list");
    // });
  });
});
