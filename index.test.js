const helloWorld = require("./index");
describe("helloWorld", () => {
  it("should return hello world", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
