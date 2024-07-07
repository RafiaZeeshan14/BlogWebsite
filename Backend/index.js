const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./db.js");
const router = require("./routes/blogRoutes");
const PORT = process.env.PORT || 5000;


require("dotenv").config({ path: ".env" });
console.log("Port:", process.env.PORT);
console.log("Mongo URI:", process.env.MONGO_URI);

// Connect to the database
dbConnect();

app.use(express.json());
app.use(cors());
app.use("/blog", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

