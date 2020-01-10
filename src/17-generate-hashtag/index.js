/*
URL: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

Instructions:
The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

/*
Notes:
- 
*/

/*
Top Result:
*/

function generateHashtag(str) {
  const regex = /\w+/g;
  const words = str.match(regex);

  if (words) {
    const result = words.reduce((result, word) => {
      return result + word.charAt(0).toUpperCase() + word.slice(1);
    }, "#");
    // console.log(words, result);
    if (result.length <= 140) {
      return result;
    }
  }
  return false;
}

module.exports = { generateHashtag };
