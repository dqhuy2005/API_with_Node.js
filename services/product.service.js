const db = require("../config/db");

const selectAll = async () => {
  const products = await db.query("SELECT * FROM products");
  return products;
};

module.exports = {
  selectAll,
};
