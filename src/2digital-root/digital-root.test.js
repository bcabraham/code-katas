const assert = require("chai").assert;
const { digital_root } = require("./main");

describe("digital_root()", function() {
  it("should add all the digits of a number", function() {
    assert.equal(digital_root(16), 7, "not equal");
  });
  it("should recursively add all the digits of a number with more than 2 digits", function() {
    assert.equal(digital_root(456), 6, "not equal");
  });
});
