test("test toBe", () => {
  const name = "Dyaksa";
  const hello = `hello ${name}`;

  expect(hello).toBe("hello Dyaksa");
});

test("test toEqual", () => {
  const data = { name: "Dyaksa" };
  Object.assign(data, { age: 25 });

  expect(data).toEqual({ name: "Dyaksa", age: 25 });
});
