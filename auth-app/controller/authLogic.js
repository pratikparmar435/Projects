const dotenv = require("dotenv");
dotenv.config();
const knex = require("../db/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.secretKey;

const register = async (req, res) => {
  let { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(406).json({ error: "All fields are required!" });
    }
    let hashPass = await bcrypt.hash(password, 12);
    const [id] = await knex("auth_users").insert({
      username: username,
      password: hashPass,
    });
    if (id === 0) {
      return res
        .status(500)
        .json({ error: "something went wrong while inserting" });
    }
    res.status(201).json({ msg: "Registration success on id : ", id });
  } catch (err) {
    res.status(500).json({ error: "something went wrong on server!" });
  }
};

const login = async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    return res.status(404).json({ error: "Fill all the fields!" });
  }
  try {
    let rightPass = await knex("auth_users")
      .select("password")
      .where({ username: username });
    if (rightPass.length === 0) {
      return res.status(404).json({ error: "username not found!" });
    }
    let hashedPass = rightPass[0].password;
    console.log(">>> Username from body:", username);
    console.log(">>> Password from body:", password);
    console.log(">>> Hashed from DB:", hashedPass);
    console.log(">>> Type check:", typeof password, typeof hashedPass);
    let isValid = await bcrypt.compare(password, hashedPass);
    console.log(">>> Password match result:", isValid);
    if (isValid) {
      const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
      return res.json({ msg: "you are now logged-in", token });
    }
    res.status(401).json({ error: "Invalid password or username" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "some server error!" });
  }
};

const profile = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await knex("auth_users").select("*").where({ id });
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Some server error!" });
  }
};

//jsonwebtoken middleware
module.exports = { register, login, profile };
