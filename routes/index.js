const accountsRoute = require("./account.route");
const authRoute = require("./auth.route");
const productRoute = require("./product.route");

function route(app) {
  // Routes
  app.use("/api/accounts", accountsRoute);

  // Login
  app.use("/api/auth", authRoute);

  // Products
  app.use("/api/products", productRoute);
}

module.exports = route;
