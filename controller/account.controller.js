const db = require("../config/db");

const getAccounts = async (req, res) => {
  try {
    const accounts = await db.query("SELECT * FROM accounts");
    console.log("List accounts: ", accounts);

    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching accounts" });
  }
};

module.exports = {
  getAccounts,
};
