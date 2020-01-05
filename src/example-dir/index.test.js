const assert = require("chai").assert;
const { exampleDir } = require("./index");

describe("exampleDir()", function() {
  it("should return an empty string when passed an empty string", function() {
    assert.strictEqual(
      exampleDir(""),
      "",
      "An empty string was provided but not returned"
    );
  });
  it("should remove each underscore and capitalize the letter immediately after it", function() {
    assert.strictEqual(
      exampleDir("the_stealth_warrior"),
      "theStealthWarrior",
      "exampleDir('the_stealth_warrior') did not return correct value"
    );
  });
  it("should remove each dash and capitalize the letter immediately after it", function() {
    assert.strictEqual(
      exampleDir("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "exampleDir('The-Stealth-Warrior') did not return correct value"
    );
  });
  it("should remove all dashes/underscores", function() {
    assert.strictEqual(
      exampleDir("A-B-C"),
      "ABC",
      "exampleDir('A-B-C') did not return correct value"
    );
  });
});
