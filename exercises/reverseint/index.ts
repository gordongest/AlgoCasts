/* solution 1 */

// const reverseInt3 = (n: number): number => {
//   let neg = false;

//   if (n < 0) {
//     neg = true;
//   }

//   const num = parseInt(Math.abs(n).toString().split('').reverse().join(''));

//   if (neg) {
//     return -num;
//   }

//   return num;
// };

/* solution 2 */

// const reverseInt2 = (n: number): number => {
//   const reversed: string = n.toString().split('').reverse().join('');

//   return parseInt(reversed) * Math.sign(n);
// };

/* solution 3 - no strings/arrays - PREFERABLE */

const reverseInt = (n: number): number => {
  let reversedNum = 0;

  let num = Math.abs(n);

  while (num >= 1) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return reversedNum * Math.sign(n);
}