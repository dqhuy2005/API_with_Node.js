const authService = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body.username, req.body.password);
    res.status(200).json({ user });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  login,
};
