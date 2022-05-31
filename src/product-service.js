import { getAllProduct, getProductById } from "../src/database";

export class ProductService {
  static findById(id) {
    return getProductById(id);
  }

  static findAll() {
    return getAllProduct();
  }
}
