describe("addressBook", function() {
  it("lets a user submit a name, last name, and address that will be saved and displayed on home page.", function() {
    expect(addressBook("Jo Jo", "White", "Deez Nutz Ave.")).to.equal("Jo Jo", "White", "Deez Nutz Ave.");
  });
});
