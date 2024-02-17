describe("Get Method And CSS Examples", () => {
  it("should learn get() method and some CSS examples", () => {
    cy.visit("https://www.letskodeit.com/practice");

    //Tag name
    cy.get("button");

    //ID name
    cy.get("#name");

    //Class name
    cy.get(".inputs");

    //Attribute value
    cy.get('[placeholder = "Enter Your Name"]');

    //Class value
    cy.get('[class = "inputs displayed-class"]');

    //Tag name and Attribute Value
    cy.get('input[id="name"]:visible');

    //Tag name and multiple attribute Value
    cy.get('input[id="name"][placeholder = "Enter Your Name"]');
  });
});
