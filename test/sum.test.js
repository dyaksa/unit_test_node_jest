import { sum } from "../src/sum";

test("sum(1,3) must be 4", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

test("sum(2,2) must be 4", () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});
