const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mysql = require("mysql2");
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const { log } = require("console");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "thisShouldBeASecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "blog",
  password: "Parmar@3135",
});

function loginRequire(req, res, next) {
  if (!req.session.user_id) {
    return res.redirect("/blog/user-login");
  }
  next();
}

app.listen(port, () => {
  console.log("Server Activated!");
});

app.get("/", (req, res) => {
  res.send("blogging website created");
});

//Authentication routes
app.get("/blog/user-login", (req, res) => {
  res.render("login.ejs", { error: null });
});

app.get("/blog/user-signup", (req, res) => {
  res.render("signup.ejs", { error: null });
});

app.post("/blog/user-signup", async (req, res) => {
  let { username, email, password } = req.body;
  try {
    const q = "INSERT INTO users (username,email,password) VALUES (?,?,?)";
    let hashPass = await bcryptjs.hash(password, 12);
    connection.query(q, [username, email, hashPass], (err, result) => {
      if (err) {
        console.log(err);
        return res.render("signup.ejs", {
          error: "Username or email is already taken",
        });
      } else {
        return res.redirect("/blog/user-login");
      }
    });
  } catch (err) {
    console.log("Error from catch", err);
    res.send("something went wrong");
  }
});

app.post("/blog/user-login", (req, res) => {
  let { username, password } = req.body;
  const q = "SELECT * FROM users WHERE username = ?";
  connection.query(q, [username], async (err, result) => {
    if (err || result.length === 0) {
      return res.render("login.ejs", { error: "Username not found" });
    }

    let user = result[0];
    let isValid = await bcryptjs.compare(password, user.password);

    if (!isValid) {
      return res.render("login.ejs", {
        error: "Invalid username or password",
      });
    } else {
      req.session.user_id = user.id;
      console.log("Login successful. Session set:", req.session.user_id);
      return res.redirect("/blog");
    }
  });
});

//posts routes
app.get("/blog", loginRequire, (req, res) => {
  const postQuery = `
    SELECT posts.id, posts.title, posts.content, users.username AS author 
    FROM posts 
    JOIN users ON posts.user_id = users.id
  `;
  const commentQuery = `
    SELECT comments.id, comments.content, comments.post_id, users.username AS commenter 
    FROM comments 
    JOIN users ON comments.user_id = users.id
  `;
  try {
    connection.query(postQuery, (err, postResults) => {
      if (err) throw err;
      connection.query(commentQuery, (err2, commentResults) => {
        if (err2) throw err2;
        // Attach comments to their corresponding post
        const posts = postResults.map((post) => {
          post.comments = commentResults.filter((c) => c.post_id === post.id);
          return post;
        });
        console.log(posts);
        res.render("home.ejs", { posts });
      });
    });
  } catch (err) {
    console.error(err);
    res.send("Something went wrong. Try again!");
  }
});
