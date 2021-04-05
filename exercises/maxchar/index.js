// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  str = cleanString(str);

  const charMap = {};

  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  let max = str[0];

  for (let char in charMap) {
    if (charMap[char] > charMap[max]) {
      max = char;
    }
  }

  return max;
}

const cleanString = (str) => {
  return str.replace(/[^\w]|_/g, '').toLowerCase().split('').sort().join('');
}

module.exports = maxChar;
