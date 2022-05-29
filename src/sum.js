export const sum = (first, second) => {
  return first + second;
};

export const sumAll = (number) => {
  let total = 0;

  for (let n of number) {
    total += n;
  }

  return total;
};
