jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");
  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
    getProductById: jest.fn(),
  };
});

test.skip("hello", () => {
  console.info("hello");
});
