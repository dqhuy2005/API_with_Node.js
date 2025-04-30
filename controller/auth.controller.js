const db = require("../config/db");

const register = async (username, password, email, image_url) => {
  const query =
    "INSERT INTO users (username, password, email, image_url) VALUES (?, ?, ?, ?)";
  try {
    await db.query(query, [username, password]);
    console.log("User registered successfully");
  } catch (error) {
    console.error("Error registering user: ", error);
  }
};

const login = async (username, password) => {
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  try {
    const [user] = await db.query(query, [username, password]);
    return user;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  register,
  login,
};
