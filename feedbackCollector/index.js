const express = require("express");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ express: true }));
app.use(methodOverride("__method"));

app.listen(port, () => {
  console.log("Server Activated!");
});

let feedbacks = [
  {
    id: uuidv4(),
    username: "Dhaval",
    feedback: "Most useful webpage",
    rate: 4,
  },
  {
    id: uuidv4(),
    username: "samat",
    feedback: "Useful but complex",
    rate: 2,
  },
  {
    id: uuidv4(),
    username: "nirav",
    feedback: "No that bad",
    rate: 3,
  },
];

app.get("/", (req, res) => {
  res.send("Server working successfully!");
});

app.get("/feedbacks", (req, res) => {
  res.render("index.ejs", { feedbacks });
});
app.get("/feedbacks/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/feedbacks/:id", (req, res) => {
  let { id } = req.params;
  let feedback = feedbacks.find((f) => id === f.id);
  res.render("show.ejs", { feedback });
});

app.post("/feedbacks", (req, res) => {
  let { username, feedback, rate } = req.body;
  let id = uuidv4();
  console.log(id);
  feedbacks.push({ id, username, feedback, rate });
  res.redirect("/feedbacks");
});

app.get("/feedbacks/:id/edit", (req, res) => {
  let { id } = req.params;
  let feedback = feedbacks.find((f) => id === f.id);
  res.render("edit.ejs", { feedback });
});

app.patch("/feedbacks/:id", (req, res) => {
  let { id } = req.params;
  let feedback = feedbacks.find((f) => id === f.id);

  if (feedback) {
    let newFeedback = req.body.feedback;
    let newRate = req.body.rate;

    feedback.feedback = newFeedback;
    feedback.rate = newRate;

    console.log("Feedback updated successfully");
    res.redirect("/feedbacks"); // Redirect to the main page
  } else {
    res.status(404).send("Feedback not found");
  }
});

app.delete("/feedbacks/:id", (req, res) => {
  let { id } = req.params;
  feedbacks = feedbacks.filter((f) => f.id !== id);
  res.redirect("/feedbacks");
});
