const express = require("express");
const db = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

const route = require("./routes/index.js");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes init
route(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
  await db.connect();
});
