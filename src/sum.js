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

export const calculate = (numbers, callback) => {
  let total = 0;

  for (let n of numbers) {
    total += n;
  }

  callback(total);
};

export const calculateAndreturnValue = (numbers, callback) => {
  let total = 0;

  for (let n of numbers) {
    total += n;
  }

  return callback(total);
};
