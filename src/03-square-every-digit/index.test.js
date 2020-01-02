const assert = require("chai").assert;
const { squareDigits } = require("./index");

describe("squareDigits()", function() {
  it("should square each digit in a number and concat them together in original order", function() {
    assert.strictEqual(squareDigits(9119), 811181, "Digits weren't squared");
  });
});
