// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = (n) => {
  for (let i = 1; i < n + 1; i++) {
    let output = '';

    if (i % 3 === 0) { output+= 'fizz' };

    if (i % 5 === 0) { output+= 'buzz' };

    // if (i % 7 === 0) { output+= 'bazz' };

    if (!output.length) { output = i };

    console.log(output);
  }
}

/* using a hash */

const fizzBuzzHash = (n) => {
  const fizzHash = {
    3: 'fizz',
    5: 'buzz',
  }

  for (let i = 1; i < n + 1; i++) {
    let output = '';
    for (let num in fizzHash) {
      if (i % num === 0) {
        output+= fizzHash[num];
      }
    }

    if (!output.length) { output = i };

    console.log(output);
  }
}

module.exports = fizzBuzz;
