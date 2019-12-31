const assert = require("chai").assert;
const { disemvowel } = require("./main");

describe("disemvowel()", function() {
  it("should return a string with all vowels removed", function() {
    assert.equal(
      disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!",
      "String has vowels."
    );
  });
});
