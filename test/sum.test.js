import { sum, sumAll } from "../src/sum";

test("sum(1,3) must be 4", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test("sum(2,2) must be 4", () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});

test("sumAll([1,2,3]) must be 6", () => {
  const result = sumAll([1, 2, 3]);
  expect(result).toBe(6);
});
