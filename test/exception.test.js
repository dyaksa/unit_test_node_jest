import { CallMe, MyException } from "../src/exception";

test("exception", () => {
  expect(() => CallMe("Dyaksa")).toThrow();
  expect(() => CallMe("Dyaksa")).toThrow(MyException);
  expect(() => CallMe("Dyaksa")).toThrow("unavailable");
  expect(CallMe("Budi")).toBe("Ok");
});
