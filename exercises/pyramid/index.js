// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid2(n) {
  // base will equal n * 2 - 1
  let base = 2 * n - 1;
  // midpoint is half of base
  let mid = Math.floor(base / 2);

  // iterate through rows
  for (let row = 0; row < n; row++) {
    // declare empty string
    let string = '';

    // iterate through columns
    for (let col = 0; col < base; col++) {
      // { ex: mid = 2 } col = 0 >= 2 FALSE, col = 1 >= 2 FALSE, col = 2 >= 2 TRUE, col = 3 <= 2 FALSE, etc.
      if (col <= mid + row && col >= mid - row) {
        string+= '#';
      } else {
        string+= ' ';
      }
    }

    console.log(string);
  }
}

const pyramid = (n, row = 0, str = '') => {
  // determine base length
  const base = 2 * n - 1;
  // determine midpoint
  const mid = Math.floor(base / 2);

  // if we've hit the last row, we're done
  if (row === n) {
    return;
  }

  // if string length === base, print it and go on to the next row
  if (str.length === base) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  // add chars to the string relative to the midpoint/row
  if (str.length <= mid + row && str.length >= mid - row) {
    str+= '#';
  } else {
    str+= ' ';
  }

  // recursively call the function to add more chars to the string
  pyramid(n, row, str)
}

module.exports = pyramid;
