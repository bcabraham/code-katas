const assert = require("chai").assert;
const { array_diff } = require("./index");

describe("array_diff()", function() {
  it("should return an empty array when passed an empty array as first param", function() {
    assert.deepEqual(array_diff([], [4, 5]), [], "a was [], b was [4,5]");
  });

  it("should return an all values in first array when passed an empty array as second param", function() {
    assert.deepEqual(
      array_diff([1, 8, 2], []),
      [1, 8, 2],
      "a was [1,8,2], b was []"
    );
  });

  it("should return only those values in first array that are not also found in second array", function() {
    assert.deepEqual(array_diff([3, 4], [3]), [4], "a was [3,4], b was [3]");
  });
});
