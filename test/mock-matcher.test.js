import { calculate } from "../src/sum";

test("test matcher", () => {
  const callback = jest.fn();

  calculate([1, 2, 3], callback);
  calculate([4, 5, 6], callback);

  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(6);
  expect(callback).toHaveBeenCalledWith(15);
});
