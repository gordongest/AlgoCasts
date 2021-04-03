const reverse = (str: string): string => {
  return str.split('').reverse().join('');
};

const reverse2 = (str: string): string => {
  let reversed: string;

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
};

const reverse3 = (str: string): string => {
  return str
    .split('')
    .reduce((reversed: string, char: string) => char + reversed, '');
};
