test("array", () => {
  const names = ["Dyaksa", "Jauharuddin", "Nour"];
  expect(names).toContain("Dyaksa");
  expect(names).toEqual(["Dyaksa", "Jauharuddin", "Nour"]);

  const persons = [{ name: "Dyaksa" }, { name: "Alfa" }];
  expect(persons).toContainEqual({ name: "Dyaksa" });
});
