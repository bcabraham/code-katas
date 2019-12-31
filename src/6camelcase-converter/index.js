/*
URL: https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

Instructions:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
  toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
  toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

/*
Notes:
- Regex: not including the g suffix will force the regex to only change the first match: /[-_]+/gi
- Splitting an empty string throws an error when reduce() is called unless you give it an initial value ('')
*/

/*
Top Result:
function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
    return match.charAt(1).toUpperCase();
  });
}

Interesting Entry:
function toCamelCase(str){
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}
*/

function toCamelCase(str) {
  // let result = str.replace(/[-_]+/gi, "");

  let result = str.split("").reduce((prev, curr) => {
    if (prev.endsWith("_") || prev.endsWith("-")) {
      return prev.substring(0, prev.length - 1) + curr.toUpperCase();
    }
    return prev + curr;
  }, "");

  // console.log(str, result);

  return result;
}

module.exports = { toCamelCase };
