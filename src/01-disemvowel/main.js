const regex = /[aeiou]+/gi;

function disemvowel(str) {
  return str.replace(regex, "");
}

module.exports = { disemvowel };
