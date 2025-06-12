const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;
const dburl = process.env.DBURL;

async function main() {
  await mongoose.connect(dburl);
}

main()
  .then((res) => {
    console.log("Successfully connected with database");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server Activated at port:", port);
});

app.get("/", (req, res) => {
  res.send("working");
});
