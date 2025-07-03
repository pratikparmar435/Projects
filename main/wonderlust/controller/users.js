const User = require("../models/user");

const renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

const signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "Registration successful!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

const renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

const login = async (req, res) => {
  req.flash("success", "Welcome to wanderlust");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    } else {
      req.flash("success", "Logged out successfully");
      res.redirect("/listings");
    }
  });
};

module.exports = { signup, renderSignupForm, renderLoginForm, login, logout };
