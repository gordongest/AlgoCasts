// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk2 = (array, size) => {
  let results = [];

  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);

    results.push(chunk);
  }

  return results;
};

const chunk = (array, size) => {
  const results = [];

  while (array.length) {
    results.push(array.splice(0, size));
  }

  return results;
};

module.exports = chunk;
