const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const routes = require("./routes/authRoutes");

const start = () => {
  try {
    app.listen(port, () => {
      console.log("Server activated on port:", port);
    });
  } catch (err) {
    console.log("something went wrong while activating server", err);
  }
};
start();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
