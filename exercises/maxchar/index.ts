const cleanString = (str: string): string => {
  return str.replace(/[^\w]|_/g, '').toLowerCase().split('').sort().join('');
}

const maxChars = (str: string): string => {
  str = cleanString(str);
  const charMap = {};

  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  let max: string = str[0];

  for (let char in charMap) {
    if (charMap[char] > charMap[max]) {
      max = char;
    }
  }

  return max;
};