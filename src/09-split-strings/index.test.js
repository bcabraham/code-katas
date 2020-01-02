const assert = require("chai").assert;
const { solution } = require("./index");

// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.

describe("SplitStrings()", function() {
  it("should split a string into pairs of two characters", function() {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
  });
  it("should add an underscore if the string's length is odd", function() {
    assert.deepEqual(solution("abc"), ["ab", "c_"]);
  });
});
