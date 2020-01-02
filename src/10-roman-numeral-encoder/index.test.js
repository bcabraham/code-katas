const assert = require("chai").assert;
const { solution } = require("./index");

describe("romanNumeralConverter()", function() {
  it("should handle small numbers", () => {
    assert.strictEqual(solution(1), "I", "1 should be I");
    assert.strictEqual(solution(2), "II", "2 should be II");
    assert.strictEqual(solution(3), "III", "3 should be III");
    assert.strictEqual(solution(4), "IV", "4 should be IV");
    assert.strictEqual(solution(5), "V", "5 should be V");
    assert.strictEqual(solution(9), "IX", "9 should be IX");
    assert.strictEqual(solution(10), "X", "10 should be X");
    assert.strictEqual(solution(11), "XI", "11 should be XI");
    assert.strictEqual(solution(19), "XIX", "19 should be XIX");
    assert.strictEqual(solution(22), "XXII", "22 should be XXII");
    assert.strictEqual(solution(15), "XV", "15 should be XV");
  });

  it("should handle large numbers", () => {
    assert.strictEqual(solution(1000), "M", "1000 should be M");
    assert.strictEqual(solution(1001), "MI", "1001 should be MI");
    assert.strictEqual(solution(1990), "MCMXC", "1990 should be MCMXC");
    assert.strictEqual(solution(2007), "MMVII", "2007 should be MMVII");
    assert.strictEqual(solution(2008), "MMVIII", "2008 should be MMVIII");
  });
});
