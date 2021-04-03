const reverseInt = (n: number): number => {
  let neg = false;

  if (n < 0) {
    neg = true;
  }

  const num = parseInt(
    Math.abs(n)
    .toString()
    .split('')
    .reverse()
    .join('')
  );

  if (neg) {
    return -num;
  }

  return num;
}