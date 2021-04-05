// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* solution 1  - naive */

  // const strArr = str.split('');
  // const reversedArr = [];

  // for (let i = strArr.length - 1; i > -1; i--) {
  //   reversedArr.push(strArr[i]);
  // }

  // const reversedStr = reversedArr.join('');
  // return reversedStr;

  /* solution 2 - ES6 */

  // // declare empty string
  // let reversed = '';

  // // 'for...of' loop through str
  // for (let char of str) {
  //   // add reversed to back of char
  //   reversed = char + reversed;
  // }

  // return reversed;

  /* solution 3 - .reduce() - POSSIBLY MOST IMPRESSIVE */

  // turn into an array
  // call reduce with a starting value of an empty string
  return str.split('').reduce((reversed, char) =>
    // 'reversed' initializes as the given empty string
    // add 'reversed' to back of every 'char'
    char + reversed
    , '');

  /* solution 4 - .reverse() */

  // use native JS methods
  // return str.split('').reverse().join('');
}

module.exports = reverse;
