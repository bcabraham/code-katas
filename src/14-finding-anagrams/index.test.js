const assert = require("chai").assert;
const { anagrams } = require("./index");

describe("anagrams()", function() {
  it("should return a list of words that are anagrams of the original word", function() {
    assert.deepEqual(
      anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]),
      ["aabb", "bbaa"],
      "Anagrams of 'abba' are ['aabb', 'bbaa']"
    );
    assert.deepEqual(
      anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]),
      ["carer", "racer"],
      "Anagrams of 'racer' are ['carer', 'racer']"
    );
  });
  it("should return an empty array if no matches exist", function() {
    assert.deepEqual(
      anagrams("laser", ["lazing", "lazy", "lacer"]),
      [],
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
  });
});
