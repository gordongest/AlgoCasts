const anagrams = (stringA: string, stringB: string): boolean => {
  return cleanString(stringA) === cleanString(stringB);
}

// const cleanString = (string: string): string => {
//   return string.replace(/[^\w|_]/g, '').toLowerCase().split('').sort().join('');
// }