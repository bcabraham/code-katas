const assert = require("chai").assert;
const { validParentheses } = require("./index");

describe("validParentheses()", function() {
  it("should return true when all open parens have a closing paren", function() {
    assert.strictEqual(validParentheses("()"), true, "() are valid parens");
    assert.strictEqual(
      validParentheses("(())((()())())"),
      true,
      "(())((()())()) are valid parens"
    );
  });
  it("should return false when all open parens don't have a closing paren", function() {
    assert.strictEqual(
      validParentheses("())"),
      false,
      "()) are invalid parens"
    );
    assert.strictEqual(
      validParentheses(")(()))"),
      false,
      ")(())) are invalid parens"
    );
    assert.strictEqual(validParentheses("("), false, "( are invalid parens");
    assert.strictEqual(validParentheses(")("), false, ")( are invalid parens");
  });
});
