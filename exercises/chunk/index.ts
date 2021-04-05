const chunk3 = (array: number[], size: number): number[][] => {
  let results = [];

  for (let i = 0; i < array.length; i += size) {
    let chunk = [];

    for (let j = i; j < i + size; j++) {
      if (array[j]) {
        chunk.push(array[j]);
      }
    }

    results.push(chunk);
  }

  return results;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const chunk2 = (array: number[], size: number): number[][] => {
  const results: number[][] = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);

    results.push(chunk);
  }

  return results;
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const chunk = (array: number[], size: number): number[][] => {
  const results: number[][] = [];

  while (array.length) {
    results.push(array.splice(0, size));
  }

  return results;
};
