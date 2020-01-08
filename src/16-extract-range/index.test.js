const assert = require("chai").assert;
const { solution } = require("./index");

describe("solution()", function() {
  it("should return an empty string when passed an empty string", function() {
    assert.strictEqual(
      solution([
        -6,
        -3,
        -2,
        -1,
        0,
        1,
        3,
        4,
        5,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        17,
        18,
        19,
        20
      ]),
      "-6,-3-1,3-5,7-11,14,15,17-20"
    );
  });
});
