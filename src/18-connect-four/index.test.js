const assert = require("chai").assert;
const {whoIsWinner} = require("./index");

describe("whoIsWinner()", function() {
  it("should return 'Yellow' if they have the first winning position", function() {
    assert.strictEqual(
      whoIsWinner([
        "C_Yellow",
        "E_Red",
        "G_Yellow",
        "B_Red",
        "D_Yellow",
        "B_Red",
        "B_Yellow",
        "G_Red",
        "C_Yellow",
        "C_Red",
        "D_Yellow",
        "F_Red",
        "E_Yellow",
        "A_Red",
        "A_Yellow",
        "G_Red",
        "A_Yellow",
        "F_Red",
        "F_Yellow",
        "D_Red",
        "B_Yellow",
        "E_Red",
        "D_Yellow",
        "A_Red",
        "G_Yellow",
        "D_Red",
        "D_Yellow",
        "C_Red"
      ]),
      "Yellow"
    );
  });

  it("should return 'Red' if they have the first winning position", function() {
    assert.strictEqual(
      whoIsWinner([
        "F_Yellow",
        "G_Red",
        "D_Yellow",
        "C_Red",
        "A_Yellow",
        "A_Red",
        "E_Yellow",
        "D_Red",
        "D_Yellow",
        "F_Red",
        "B_Yellow",
        "E_Red",
        "C_Yellow",
        "D_Red",
        "F_Yellow",
        "D_Red",
        "D_Yellow",
        "F_Red",
        "G_Yellow",
        "C_Red",
        "F_Yellow",
        "E_Red",
        "A_Yellow",
        "A_Red",
        "C_Yellow",
        "B_Red",
        "E_Yellow",
        "C_Red",
        "E_Yellow",
        "G_Red",
        "A_Yellow",
        "A_Red",
        "G_Yellow",
        "C_Red",
        "B_Yellow",
        "E_Red",
        "F_Yellow",
        "G_Red",
        "G_Yellow",
        "B_Red",
        "B_Yellow",
        "B_Red"
      ]),
      "Red"
    );
  });

  it("should return 'Draw' if now winner can be determined", function() {
    assert.strictEqual(
      whoIsWinner(["A_Red", "B_Yellow", "A_Red", "E_Yellow", "F_Red", "G_Yellow"]),
      "Draw"
    );
  });
});
