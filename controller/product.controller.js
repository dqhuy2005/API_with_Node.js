const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, category_id, image_url } = req.body;

    if (!name || !price || !category_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await Product.create(name, price, category_id, image_url);
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category_id, image_url } = req.body;

    if (!name || !price || !category_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const updatedProduct = await Product.update(
      id,
      name,
      price,
      category_id,
      image_url
    );

    if (updatedProduct.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.delete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
