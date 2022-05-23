import { sayHello } from "../src/async";

test("async test", async () => {
  const result = await sayHello("Dyaksa");
  expect(result).toBe("Hello Dyaksa");
});

test("test asycn macther", async () => {
  await expect(sayHello("Dyaksa")).resolves.toBe("Hello Dyaksa");
  await expect(sayHello()).rejects.toBe("error value undefined");
});
