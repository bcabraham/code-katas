const assert = require("chai").assert;
const { isValidWalk } = require("./index");

describe("isValidWalk()", function() {
  it("should return true when the segments point back to the start", function() {
    assert.strictEqual(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      true,
      "[n,s,n,s,n,s,n,s,n,s] brings you back to start and is the right length"
    );
  });
  it("should return false if you don't end up where you started", function() {
    assert.strictEqual(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
      false,
      "[w,e,w,e,w,e,w,e,w,e,w,e] Walk is too long"
    );
    assert.strictEqual(
      isValidWalk(["w"]),
      false,
      "[w] walk is too short and doesnt bring you back to the start"
    );
    assert.strictEqual(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      false,
      "[n,n,n,s,n,s,n,s,n,s] Moves do not bring you back to start"
    );
  });
});
