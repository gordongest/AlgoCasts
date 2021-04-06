const steps = (n: number, row: number = 0, str: string = ''): void => {
  if (row === n) {
    return;
  }

  if (str.length === n) {
    console.log(str);
    return steps(n, row + 1);
  }

  str.length <= row ? str+= '#' : str+= ' ';

  steps(n, row, str);
}