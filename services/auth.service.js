const db = require("../config/db");

const login = async (username, password) => {
  const user = await db.query(
    "SELECT * FROM accounts WHERE username = ? AND password = ?",
    [username, password]
  );

  if (!user) {
    throw new Error("Invalid username or password");
  }

  console.log(`User ${username} logged in successfully.`);

  return user;
};

module.exports = {
  login,
};
