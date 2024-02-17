const { eq } = require("cypress/types/lodash");

describe("Implicit Assertion", () => {
  it("should understand implicit assertions in cypress", () => {
    cy.visit("https://www.letskodeit.com/practice");

    let firstText;
    let secondText;

    cy.get("#product")
      .find("tbody tr:nth-child(2)")
      .find("td")
      .first()
      .then(($val) => {
        firstText = $val.text();
      });

    cy.get("#product")
      .find("tbody tr:nth-child(3)")
      .find("td")
      .first()
      .then(($val2) => {
        secondText = $val2.text();
        expect(secondText, "Verify the first text with second text").to.equal(
          firstText
        );
      });
  });
});
