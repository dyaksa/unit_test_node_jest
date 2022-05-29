import { sum } from "../src/sum";

beforeAll(() => {
  console.info("beforeAll");
});

afterAll(() => {
  console.info("afterAll");
});

afterEach(() => {
  console.info("beforeeach");
});

beforeEach(() => {
  console.info("aftereach");
});

test("sum(1,1) must be 2", () => {
  const result = sum(1, 1);
  expect(result).toBe(2);
});
