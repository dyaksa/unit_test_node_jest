import { sumAll } from "../src/sum";

describe("it function", () => {
  it("sumAll([1,2,3] must be 6", () => {
    const result = sumAll([1, 2, 3]);
    expect(result).toBe(6);
  });
});
