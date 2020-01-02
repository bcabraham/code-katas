const assert = require("chai").assert;
const { moveZeros } = require("./index");

describe("moveZeros()", function() {
  it("should move all zeroes to the end of an array", function() {
    assert.strictEqual(
      JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
      JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]),
      "Zeroes were not moved"
    );
  });
});
