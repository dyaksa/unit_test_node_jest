test("string", () => {
  const name = "Dyaksa Jauhruddin";
  expect(name).toBe("Dyaksa Jauhruddin");
  expect(name).toMatch(/uddin/);
});
