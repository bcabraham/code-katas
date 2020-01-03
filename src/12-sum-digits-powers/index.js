/*
URL: https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

Instructions:
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

Given a two numbers, find any number between and including them that equals the sum of its digits raised to the power 
of the digit's place, starting at 1 and counting up, left to right.

Examples: 
  89 = 8^1 + 9^2
  135 = 1^1 + 3^2 + 5^3
  Note: numbers 1-9 have this property as well.

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the 
title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2
The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:
sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []


*/

/*
Notes:
- 
*/

/*
Top Result:
*/

function sumDigPow(a, b) {
  let count = a;
  let result = [];

  // First go
  // while (count <= b) {
  //   let digits = String(count).split("");
  //   let sum = 0;

  //   for (let i = 0; i < digits.length; i++) {
  //     sum += Math.pow(digits[i], i + 1);
  //   }

  //   if (sum === count) {
  //     result.push(count);
  //   }

  //   count++;
  // }

  while (count <= b) {
    let sum = String(count)
      .split("")
      .reduce((sum, value, index) => {
        return (sum += Math.pow(parseInt(value), index + 1));
      }, 0);

    if (sum === count) {
      result.push(count);
    }

    count++;
  }

  return result;
}

module.exports = { sumDigPow };
