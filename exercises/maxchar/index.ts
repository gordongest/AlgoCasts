const maxChars = (str: string): string => {
  const charMap = {};

  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  let current: string = str[0];

  for (let char in charMap) {
    if (charMap[char] > charMap[current]) {
      current = char;
    }
  }

  return current;
};
