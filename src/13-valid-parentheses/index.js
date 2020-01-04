/*
URL: https://www.codewars.com/kata/valid-parentheses/train/javascript

Instructions:
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

/*
Notes:
- Just comparing char counts is not sufficient. 
  Need to account for closing parens ocurring AFTER opening parens as well
*/

/*
Top Result:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec


function validParentheses(string) {
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
    count = 0, // pretty useless if they're not grouping *something*
    token;

  while (((token = tokenizer.exec(string)), token !== null)) {
    if (token == "(") {
      count++;
    } else if (token == ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}
*/

// First Idea
// function validParentheses(parens) {
//   let open = 0;
//   let closed = 0;

//   parens.split("").forEach(char => {
//     if (char === "(") {
//       open++;
//     } else if (char === ")") {
//       closed++;
//     }
//   });

//   return open === closed;
// }

function validParentheses(parens) {
  let depth = 0;

  for (let i = 0; i < parens.length; i++) {
    let char = parens.charAt(i);

    if (char === "(") {
      depth++;
    } else if (char === ")") {
      depth--;
      if (depth < 0) {
        return false;
      }
    }
  }

  return depth === 0;
}

module.exports = { validParentheses };
