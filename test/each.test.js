import { sumAll } from "../src/sum";

const table = [
  {
    numbers: [10, 10, 10],
    expected: 30,
  },
  {
    numbers: [10, 10, 10, 10],
    expected: 40,
  },
  {
    numbers: [10, 10, 10, 10, 10],
    expected: 50,
  },
];

test.each(table)(
  "sumAll($numbers) should be expected",
  ({ numbers, expected }) => {
    const result = sumAll(numbers);
    expect(result).toBe(expected);
  }
);
