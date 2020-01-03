const assert = require("chai").assert;
const { sumDigPow } = require("./index");

describe("sumDigPow()", function() {
  it("should return an array of Eureka numbers", function() {
    assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    assert.deepEqual(sumDigPow(10, 100), [89]);
    assert.deepEqual(sumDigPow(90, 150), [135]);
    assert.deepEqual(sumDigPow(50, 150), [89, 135]);
    assert.deepEqual(sumDigPow(10, 150), [89, 135]);
  });

  it("should return an empty array when no Eureka numbers are found", function() {
    assert.deepEqual(sumDigPow(90, 100), []);
  });
});
