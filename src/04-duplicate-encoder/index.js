/*
Track:
position - index of array/object
character
# occurences
*/

/*
Highest voted answer:

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

*/

function duplicateEncode(word) {
  let result = "";
  let positions = [];
  let occurences = {};

  word
    .toLowerCase()
    .split("")
    .forEach(char => {
      positions.push(char);
      occurences[char] = occurences[char] + 1 || 1;
    });

  positions.forEach(c => {
    result += occurences[c] > 1 ? ")" : "(";
  });

  // console.log(JSON.stringify(positions), JSON.stringify(occurences), result);

  return result;
}

module.exports = { duplicateEncode };
// duplicateEncode("rin");
