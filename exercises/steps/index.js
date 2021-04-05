// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {
  // start for loop
  for (let i = 1; i <= n; i++) {
    // at each step, log i #'s and (n - i) spaces
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
};

// unnecessarily hard version

const recursiveSteps = (n, row = 0, str = '') => {
  // if we have reached n rows, we're done
  if (row === n) {
    return;
  }

  if (n === str.length) {
    // if the string has n characters in it, print it and
    console.log(str);
    // proceed to the next row
    return recursiveSteps(n, row + 1);
  }

  if (str.length <= row) {
    // if the string length is less than/equal to the row, add a #
    str += '#';
  } else {
    // otherwise add whitespace until the row is complete
    str += ' ';
  }

  // recursive call to continue building the current row
  recursiveSteps(n, row, str);
};

module.exports = steps;
