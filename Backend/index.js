const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: ".env" });
const dbConnect = require("./db.js");
const router = require("./routes/blogRoutes");

const PORT = process.env.PORT || 5000;

const app = express();

// Connect to the database
dbConnect();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/blog", router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

console.log("Port:", process.env.PORT);
console.log("Mongo URI:", process.env.MONGO_URI);
