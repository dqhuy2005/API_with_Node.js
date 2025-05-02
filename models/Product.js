const db = require("../config/db.js");
class Product {
  constructor(id, name, price, category_id, image_url) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category_id = category_id;
    this.image_url = image_url;
  }

  static async getAll() {
    const products = await db.query("SELECT * FROM products");
    return products.map(
      (row) =>
        new Product(row.id, row.name, row.price, row.category_id, row.image_url)
    );
  }

  static async create(name, price, category_id, image_url) {
    const product = await db.query(
      "INSERT INTO products (name, price, category_id, image_url) VALUES (?, ?, ?, ?)",
      [name, price, category_id, image_url]
    );

    const findProduct = await db.query("SELECT * FROM products WHERE id = ?", [
      product.insertId,
    ]);

    return findProduct;
  }

  static async getProductById(id) {
    const product = await db.query("SELECT * FROM products WHERE id = ?", [id]);
    if (product.length === 0) {
      throw new Error("Product not found");
    }
    return product;
  }

  static async update(id, name, price, category_id, image_url) {
    const product = await db.query(
      "UPDATE products SET name = ?, price = ?, category_id = ?, image_url = ? WHERE id = ?",
      [name, price, category_id, image_url, id]
    );
    return product;
  }

  static async delete(id) {
    const result = await db.query("DELETE FROM products WHERE id = ?", [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Product;
