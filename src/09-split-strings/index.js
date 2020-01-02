/*
URL: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

Instructions:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

/*
Notes:
- Thoughts on using string.split() [takes regex, but does not return what's in the regex] or string.slice()
- string.match() is what I needed. See below.
*/

/*
Top Result:
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
The match() method retrieves the result of matching a string against a regular expression.

Example:
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
*/

function solution(str) {
  let result = [];

  for (let i = 0; i < str.length; i += 2) {
    let subString = str.slice(i, i + 2);
    if (subString.length === 1) {
      subString += "_";
    }
    // console.log(i, i + 2, str.length, subString);
    result.push(subString);
  }

  // console.log(str, str.length, JSON.stringify(result));

  return result;
}

module.exports = { solution };
