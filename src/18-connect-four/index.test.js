const assert = require("chai").assert;
const { whoIsWinner } = require("./index");

describe("whoIsWinner()", function() {
  it("should return an empty string when passed an empty string", function() {
    assert.strictEqual(
      whoIsWinner(""),
      "",
      "An empty string was provided but not returned"
    );
  });
  it("should remove each underscore and capitalize the letter immediately after it", function() {
    assert.strictEqual(
      whoIsWinner("the_stealth_warrior"),
      "theStealthWarrior",
      "whoIsWinner('the_stealth_warrior') did not return correct value"
    );
  });
  it("should remove each dash and capitalize the letter immediately after it", function() {
    assert.strictEqual(
      whoIsWinner("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "whoIsWinner('The-Stealth-Warrior') did not return correct value"
    );
  });
  it("should remove all dashes/underscores", function() {
    assert.strictEqual(
      whoIsWinner("A-B-C"),
      "ABC",
      "whoIsWinner('A-B-C') did not return correct value"
    );
  });
});
