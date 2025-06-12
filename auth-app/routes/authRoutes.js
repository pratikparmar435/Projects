const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const { register, login, profile } = require("../controller/authLogic");

//middleware for json web token
const secretKey = process.env.secretKey;
function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Access denied!" });
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send("Invalid token");
  }
}

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/:id").get(authenticateToken, profile);

module.exports = router;
