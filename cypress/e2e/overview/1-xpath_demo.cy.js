describe("Cypress XPath Demo", () => {
  it("should verify xpath capabilities", () => {
    cy.visit("https://www.letskodeit.com/courses");
    //cy.xpath('//input[@id="search"]').type('Test')

    //xPath always uses the notation //before each element , when .// is used which means the element is searched in current node.
    //When we use ./ then only top level element in current node is searched.

    cy.xpath('//div[@id="course-list"]')
      .xpath("./div")
      .should("have.length", 6);
  });
});
