const express = require("express");
const db = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const accountsRoute = require("./routes/account.route");
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/accounts", accountsRoute);

// Home
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Login
app.post("/login", (req, res) => {
  res.send("Login endpoint");
  console.log(req.body);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
  await db.connect();
});
