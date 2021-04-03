// const palindrome = (str: string): boolean =>
// (str.split('').reverse().join('') === str)

const palindrome = (str: string): boolean =>
  str.split('').reduce((reverse, char): string => char + reverse, '') === str;
