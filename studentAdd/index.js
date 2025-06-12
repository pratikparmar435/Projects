const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
const port = 8080;
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("server activated!");
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "college",
  password: "Parmar@3135",
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/student/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/student/register", (req, res) => {
  let { name, email, dob } = req.body;
  console.log(name, email, dob);
  const q = "INSERT INTO students (id,name,email,dob) VALUES (?,?,?,?)";
  let id = uuidv4();
  let student = [id, name, email, dob];
  try {
    connection.query(q, student, (err, result) => {
      if (err) throw err;
      res.redirect(`/student/enrollment?id=${id}`);
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/student/enrollment", (req, res) => {
  const coursesQue = "SELECT * FROM courses";
  const student_id = req.query.id;
  try {
    connection.query(coursesQue, (err, result) => {
      if (err) throw err;
      let courses = result;
      res.render("enrollment.ejs", { courses, student_id });
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/student/enroll", (req, res) => {
  const { student_id, course_id } = req.body;
  const q =
    "INSERT INTO enrollments (student_id,courses_id,enroll_date) VALUES (?,?,?)";
  let today = new Date();
  let date = today.toISOString().split("T")[0];
  const enrollData = [student_id, course_id, date];
  try {
    connection.query(q, enrollData, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  } catch (err) {
    res.send(err);
  }
});

app.get("/admin", (req, res) => {
  const q = "SELECT * FROM students";
  connection.query(q, (err, result) => {
    if (err) throw err;
    let students = result;
    res.render("admin.ejs", { students });
  });
});
