const assert = require("chai").assert;
const { isTriangle } = require("./index");

describe("isTriangle()", function() {
  it("should return True for a valid Triangle", function() {
    assert.strictEqual(isTriangle(1, 2, 2), true);
  });
  it("should return False for an invalid Triangle", function() {
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
