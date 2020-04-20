describe("integration", () => {
  it("can navigate to shared", () => {
    cy.visit("/").get("a").should("have.attr", "href");
  });
});
