import { getAllProduct, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database");

test("mock module getProductById", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "Product Mock",
    };
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({
    id: 1,
    name: "Product Mock",
  });
});

test("mock module get all product", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock 1",
    },
    {
      id: 2,
      name: "Product Mock 2",
    },
  ];

  getAllProduct.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});

test.failing("should be error", () => {
  getProductById.mockImplementation((id) => {
    throw new Error("error");
  });

  ProductService.findById(1);
});
