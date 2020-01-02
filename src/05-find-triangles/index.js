/*
https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

-- What makes a triangle?
According to the first triangle inequality theorem, the lengths of any two sides of a triangle must add up to more than the length of the third side.

*/

/*
Top Result:

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
*/

function isTriangle(a, b, c) {
  let result = false;

  // First Idea
  // if (a >= b && a >= c) {
  //   result = b + c > a;
  // } else if (b >= a && b >= c) {
  //   result = a + c > b;
  // } else if (c >= a && c >= b) {
  //   result = a + b > c;
  // }

  // Find the longest side using Array.Sort() and compare the sum of the two shorter sides
  let array = [a, b, c];
  let sortedArray = array.sort((a, b) => a - b);
  result = sortedArray[0] + sortedArray[1] > sortedArray[2];

  // console.log(sortedArray, result);
  return result;
}

module.exports = { isTriangle };
