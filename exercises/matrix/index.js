// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let col = 0,
      startCol = 0,
      endCol = n - 1,
      row = 0,
      startRow = 0,
      endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter++;
    }

    // move down
    startRow++;

    // right col
    for (let j = startRow; j <= endRow; j++) {
      results[j][endCol] = counter++;
    }

    // move left
    endCol--;

    // bottom row
    for (let k = endCol; k >= startCol; k--) {
      results[endRow][k] = counter++;
    }

    // move up
    endRow--;

    // left col
    for (let m = endRow; m >= startRow; m--) {
      results[m][startCol] = counter++
    }

    // move right
    startCol++;
  }

  return results;
}

module.exports = matrix;
