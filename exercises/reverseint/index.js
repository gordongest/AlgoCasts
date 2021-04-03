// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* solution 1 */

// function reverseInt(n) {
//   let neg = false;

//   if (n < 0) {
//     neg = true;
//   }

//   const num = parseInt(Math.abs(n).toString().split('').reverse().join(''));

//   if (neg) {
//     return -num;
//   }

//   return num;
// }

/* solution 2 */

// const reverseInt = (n) => {
//   const reversed = n.toString().split('').reverse().join('');

//   return parseInt(reversed) * Math.sign(n);
// };

/* solution 3 - no strings/arrays - PREFERABLE */

const reverseInt = (n) => {
  let reversedNum = 0;

  let num = Math.abs(n);

  while (num >= 1) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return reversedNum * Math.sign(n);
}

module.exports = reverseInt;
