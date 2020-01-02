/*
URL: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Instructions:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Example:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

/*
Notes:
- Array.push() adds an element to the end
- Array.unshift() adds an element to the front
*/

/*
Top Result:
// Comments are mixed about this approach though.
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/

// first idea:
// var moveZeros = function(arr) {
//   console.log(JSON.stringify(arr));
//   let result = [];
//   let zeroes = [];

//   arr.forEach(element => {
//     if (element === 0) {
//       zeroes.push(element);
//     } else {
//       result.push(element);
//     }
//   });

//   console.log(
//     JSON.stringify(result),
//     JSON.stringify(zeroes),
//     JSON.stringify(result.concat(zeroes))
//   );

//   return result.concat(zeroes);
// };

var moveZeros = function(arr) {
  let result = arr.reduceRight((accumulator, value) => {
    value === 0 ? accumulator.push(value) : accumulator.unshift(value);
    return accumulator;
  }, []);

  return result;
};

module.exports = { moveZeros };
