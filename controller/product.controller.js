const productService = require("../services/product.service");

const getProducts = async (req, res) => {
  try {
    const products = await productService.selectAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProducts,
};
