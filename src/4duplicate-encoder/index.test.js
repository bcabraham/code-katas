const assert = require("chai").assert;
const { duplicateEncode } = require("./index");

describe("duplicateEncode()", function() {
  it("should replace unique chars with (", function() {
    assert.strictEqual(duplicateEncode("din"), "(((");
  });
  it("should replace unique chars with ( and duplicate chars with )", function() {
    assert.strictEqual(duplicateEncode("recede"), "()()()");
  });
  it("should ignore case", function() {
    assert.strictEqual(
      duplicateEncode("Success"),
      ")())())",
      "should ignore case"
    );
  });
  it("should treat ( and ) as characters as well", function() {
    assert.strictEqual(duplicateEncode("(( @"), "))((");
  });
});
