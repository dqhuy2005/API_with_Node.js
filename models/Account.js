const db = require("../config/db");
class Account {
  constructor(id, name, price, category_id, image_url) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category_id = category_id;
    this.image_url = image_url;
  }
}

module.exports = Account;
