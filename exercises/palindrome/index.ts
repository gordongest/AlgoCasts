/* .reverse() */
const palindrome = (str: string): boolean =>
  str.split('').reverse().join('') === str;

/* .reduce() */
const palindrome2 = (str: string): boolean =>
  str
    .split('')
    .reduce((reverse: string, char: string): string => char + reverse, '') ===
  str;

/* .every() */

const palindrome3 = (str: string): boolean => {
  return str.split('').every((char: string, i: number) => {
    return char === str[str.length - i - 1];
  });
};

