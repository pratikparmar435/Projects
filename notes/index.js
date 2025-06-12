const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const notesRoutes = require("./routes/routes");

app.use("/api", notesRoutes);
app.use(express.json());

const start = async () => {
  try {
    app.listen(port, () => {
      console.log("Server Activated on port :", port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

app.get("/", (req, res) => {
  res.send("Nothing");
});
