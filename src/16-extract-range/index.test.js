const assert = require("chai").assert;
const {solution} = require("./index");

describe("solution()", function() {
  it("should return all numbers not in sequence", function() {
    assert.strictEqual(solution([1, 3, 5, 7, 9, 11]), "1,3,5,7,9,11");
  });
  it("should return the start and end values of a range of numbers, separated by a dash", function() {
    assert.strictEqual(solution([1, 2, 3, 4, 5]), "1-5");
  });
  it("should return an array with all numbers not in sequence and dashes for number ranges", function() {
    assert.strictEqual(
      solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
      "-6,-3-1,3-5,7-11,14,15,17-20"
    );
  });
});
