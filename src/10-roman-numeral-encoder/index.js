/*
URL: https://www.codewars.com/kata/roman-numerals-encoder/train/javascript

Instructions:
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit 
and skipping any digit with a value of zero. 
In Roman numerals:
  1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
  2008 is written as 2000=MM, 8=VIII; or MMVIII. 
  1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

  Symbol    Value   Power of 10
  I          1      0
  V          5      0
  X          10     1
  L          50     1
  C          100    2
  D          500    2
  M          1,000  3
Remember that there can't be more than 3 identical symbols in a row.
More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

0-9 uses I, V, X
10-99 uses X, L, C
100-999 uses C, D, M
1000-9999 uses D, M

*/

/*
Notes:
- The biggest problem I had was related the decimals to the roman character variants. 
- I created solution2() based on the idea of using parallel arrays.
*/

/*
Top Result:
// Not the top result, but I like this approach better than what I did. 
// They took my idea of 4's and 9's being special cases and codified them in the arrays.
// I like this since it uses parallel arrays as well.

function solution(number)
{
  var result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  
  return result;
}
*/

function solution(number) {
  let numArray = number
    .toString()
    .split("")
    .reverse();

  // console.log(JSON.stringify(numArray));

  let result = [];

  for (let tensPlace = 0; tensPlace < numArray.length; tensPlace++) {
    let digit = parseInt(numArray[tensPlace]);

    // console.log(JSON.stringify({ digit, tensPlace }));
    let romanNums = getOnesFivesTens(tensPlace);

    switch (digit) {
      case 1:
      case 2:
      case 3:
        result.unshift(romanNums.ones.repeat(digit));
        break;
      case 4:
        result.unshift(romanNums.ones + romanNums.fives);
        break;
      case 5:
        result.unshift(romanNums.fives);
        break;
      case 6:
      case 7:
      case 8:
        result.unshift(romanNums.fives + romanNums.ones.repeat(digit - 5));
        break;
      case 9:
        result.unshift(romanNums.ones + romanNums.tens);
        break;
      default:
        break;
    }
  }

  return result.join("");
}

/*
0-9 uses I, V, X
10-99 uses X, L, C
100-999 uses C, D, M
1000-9999 uses D, M
*/

function getOnesFivesTens(power) {
  let digits;
  switch (power) {
    case 0:
      digits = { ones: "I", fives: "V", tens: "X" };
      break;
    case 1:
      digits = { ones: "X", fives: "L", tens: "C" };
      break;
    case 2:
      digits = { ones: "C", fives: "D", tens: "M" };
      break;
    case 3:
      digits = { ones: "M", fives: "", tens: "" };
      break;
    default:
      break;
  }
  // console.log(JSON.stringify(digits));

  return digits;
}

const baseTen = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const baseRoman = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I"
];

function solution2(number) {
  let result = "";
  let index = 0;

  while (number > 0) {
    let decimal = baseTen[index];
    let roman = baseRoman[index];
    if (number >= decimal) {
      result += roman;
      number -= decimal;
    } else {
      index++;
    }
  }

  return result;
}

module.exports = { solution, solution2 };
