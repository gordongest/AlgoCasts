const pyramid = (n: number, row: number = 0, str: string = ''): void => {
  const base = 2 * n - 1;
  const mid = Math.floor(base / 2);

  if (row === n) {
    return;
  }

  if (str.length === base) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  if (str.length <= mid + row && str.length >= mid - row) {
    str+= '#';
  } else {
    str+= ' ';
  }

  pyramid(n, row, str);
}