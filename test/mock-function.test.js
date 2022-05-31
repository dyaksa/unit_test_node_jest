import { calculate, calculateAndreturnValue } from "../src/sum";

test("calculate mock", () => {
  const callback = jest.fn();

  calculate([1, 2, 3], callback);
  calculate([4, 5, 6], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(6);
  expect(callback.mock.calls[1][0]).toBe(15);
});

test("calculate and return value", () => {
  const callback = jest.fn();

  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndreturnValue([1, 2, 3], callback)).toBe(40);
  expect(calculateAndreturnValue([4, 5, 6], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateAndreturnValue([10, 10, 10], callback)).toBe(60);
  expect(calculateAndreturnValue([10, 10, 10, 10, 10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);
});
