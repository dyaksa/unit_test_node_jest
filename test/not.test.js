test("string.not ", () => {
  const name = "Dyaksa Jauharuddin Nour";
  expect(name).not.toBe("Joko");
  expect(name).not.toEqual("Joko");
  expect(name).not.toMatch(/joko/);
});

test("number.not", () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(5);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(2);
});
