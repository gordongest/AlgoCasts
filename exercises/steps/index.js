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
}

module.exports = steps;
