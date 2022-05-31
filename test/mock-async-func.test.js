import { getBalance } from "../src/async";

test("test mock async resolved", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("Dyaksa", from)).resolves.toEqual({
    name: "Dyaksa",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("test rejected async", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("error"));

  await getBalance("dyaksa", from);
});
