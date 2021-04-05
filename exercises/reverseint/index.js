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
  // declare a destination for reversed number
  let reversedNum = 0;

  // while n exists
  while (n !== 0) {
    // add a zero to reversedNum, and add the rightmost digit of n
    reversedNum = reversedNum * 10 + n % 10;
    // chop the rightmost digit off of n by dividing by 10 and rounding
    n = parseInt(n / 10);
  }

  // return the reversed number
  return reversedNum;
}

module.exports = reverseInt;
