const express = require("express");
const app = express();
const port = 8080;
const mysql = require("mysql2");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const session = require("express-session");
const bcrypt = require("bcrypt");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "thisShouldBeASecretKey",
    resave: false,
    saveUninitialized: false,
  })
);

//creating middleware for only logged in users can interact
function requireLogin(req, res, next) {
  if (!req.session.user_id) {
    return res.redirect("/expenses/user-login");
  }
  next();
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "Parmar@3135",
});

app.listen(port, () => {
  console.log("Server activated");
});

app.get("/expenses", requireLogin, (req, res) => {
  const user_id = req.session.user_id;
  let q = "SELECT * FROM expenses WHERE user_id = ?";
  try {
    connection.query(q, [user_id], (err, result) => {
      if (err) throw err;
      let expenses = result;
      res.render("home.ejs", { expenses });
    });
  } catch (err) {
    return res.send("DB error");
  }
});

app.get("/expenses/new", requireLogin, (req, res) => {
  res.render("new.ejs", {
    errorMessages: [],
    formData: {},
  });
});

app.post("/expenses", requireLogin, (req, res) => {
  let { amount, category, spend_date } = req.body;
  let user_id = req.session.user_id;
  let errors = [];
  if (!amount || isNaN(amount) || amount <= 0) {
    errors.push("Invalid amount!");
  }
  if (!category || category.trim() == "") {
    errors.push("Category is required");
  }
  if (!spend_date || spend_date.trim() == "") {
    errors.push("Spend Date is required");
  }
  if (errors.length > 0) {
    return res.render("new.ejs", {
      errorMessages: errors,
      formData: { amount, category, spend_date },
    });
  }
  const q =
    "INSERT INTO expenses (id, category, amount, spend_date, user_id) VALUES (?, ?, ?, ?, ?)";
  let id = uuidv4();
  let newExpenseInfo = [id, category, amount, spend_date, user_id];
  try {
    connection.query(q, newExpenseInfo, (err, result) => {
      if (err) throw err;
      res.redirect("/expenses");
    });
  } catch (err) {
    res.send("Something Went Wrong!");
  }
});

app.get("/expenses/:id/edit", (req, res) => {
  let { id } = req.params;
  const q = "SELECT * FROM expenses WHERE id = ?";
  try {
    connection.query(q, id, (err, result) => {
      if (err) throw err;
      let expenseInfo = result[0];
      res.render("edit.ejs", { expenseInfo });
    });
  } catch (err) {
    res.send("Something went wrong!");
  }
});

app.patch("/expenses/:id", (req, res) => {
  let { amount, category, spend_date } = req.body;
  let { id } = req.params;
  let q = `UPDATE expenses SET category = ?, amount = ?, spend_date = ? WHERE id = ?`;
  let editInfo = [category, amount, spend_date, id];
  try {
    connection.query(q, editInfo, (err, result) => {
      if (err) throw err;
      res.redirect("/expenses");
    });
  } catch (err) {
    res.send("Something went wrong!");
  }
});

app.delete("/expenses/:id", (req, res) => {
  let { id } = req.params;
  let q = "DELETE FROM expenses WHERE id = ?";
  try {
    connection.query(q, id, (err, result) => {
      if (err) throw err;
      res.redirect("/expenses");
    });
  } catch (err) {
    res.send("Something went wrong!");
  }
});

//login and register page
app.get("/expenses/user-login", (req, res) => {
  res.render("login.ejs", { error: null });
});

app.get("/expenses/user-register", (req, res) => {
  res.render("register.ejs", { error: null });
});

app.post("/expenses/user-register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const hash = await bcrypt.hash(password, 12);
    let id = uuidv4();

    const q = "INSERT INTO users (id,username,password) VALUES (?,?,?)";
    connection.query(q, [id, username, hash], (err, result) => {
      if (err) {
        console.log(err);
        return res.render("register.ejs", {
          error: "Username is already taken!",
        });
      } else {
        return res.redirect("/expenses/user-login");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong!");
  }
});

app.post("/expenses/user-login", (req, res) => {
  const { username, password } = req.body;
  const q = "SELECT * FROM users WHERE username = ?";
  connection.query(q, [username], async (err, result) => {
    if (err || result.length === 0) {
      return res.render("login.ejs", { error: "Invalid username or password" });
    }

    const user = result[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      req.session.user_id = user.id;
      console.log("Login successful. Session set:", req.session.user_id);
      res.redirect("/expenses");
    } else {
      return res.render("login.ejs", { error: "Invalid password" });
    }
  });
});
