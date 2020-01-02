const assert = require("chai").assert;
const { toCamelCase } = require("./index");

describe("toCamelCase()", function() {
  it("should return an empty string when passed an empty string", function() {
    assert.strictEqual(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
  });

  it("should remove each underscore and capitalize the letter immediately after it", function() {
    assert.strictEqual(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
  });

  it("should remove each dash and capitalize the letter immediately after it", function() {
    assert.strictEqual(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    );
  });

  it("should remove all dashes/underscores", function() {
    assert.strictEqual(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value"
    );
  });
});
