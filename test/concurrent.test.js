import { sayHello } from "../src/async";

const table = [
  {
    names: "Dyaksa",
    expected: "Hello Dyaksa",
  },
  {
    names: "Widodo",
    expected: "Hello Widodo",
  },
  {
    names: "Ganet",
    expected: "Hello Ganet",
  },
];

test.concurrent.each(table)(
  "sayHello($names) should be $expected",
  async ({ names, expected }) => {
    await expect(sayHello(names)).resolves.toBe(expected);
  }
);
