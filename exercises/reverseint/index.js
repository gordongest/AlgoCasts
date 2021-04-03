// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let neg = false;

  if (n < 0) {
    neg = true;
  }

  const num = parseInt(Math.abs(n).toString().split('').reverse().join(''));

  if (neg) {
    return -num;
  }

  return num;
}

module.exports = reverseInt;
