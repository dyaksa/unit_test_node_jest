import { helloSay } from "../src/sayhello";

test("helloSay('Dyaksa') should be Hello Dyaksa", () => {
  const result = helloSay("Dyaksa");
  expect(result).toBe("Hello Dyaksa");
});

test.failing("helloSay(null) should be throw error", () => {
  helloSay(null);
});
