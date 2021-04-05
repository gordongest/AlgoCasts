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

function steps(n) {
  // create an output string with n spaces
  let output = ' '.repeat(n);
  // start for loop
  for (let i = 0; i < n; i++) {
    // at each step, add a # to the string and remove the last space
    output = '#' + output.slice(0, -1);
    // log the string
    console.log(output)
  }
}

module.exports = steps;
