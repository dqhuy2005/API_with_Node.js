// routes/account.route.js
const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.post("/login", async (req, res) => {
  try {
    const user = await authController.login(
      req.body.username,
      req.body.password
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
