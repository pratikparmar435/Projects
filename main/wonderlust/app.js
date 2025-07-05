require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRoutes = require("./routes/listings.js");
const reviewRoutes = require("./routes/reviews.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const secret = "iambatman";
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategies = require("passport-local");
const User = require("./models/user.js");
const userRoutes = require("./routes/users.js");

const sessionOption = {
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(cookieParser(secret));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategies(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine("ejs", ejsMate);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
}

main()
  .then((res) => console.log("Connection with database successful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Working");
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.deleting = req.flash("deleting");
  res.locals.updating = req.flash("updating");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "example@gmail.com",
//     username: "apna-college",
//   });

//   let registeredUser = await User.register(fakeUser, "password");
//   res.send(registeredUser);
// });

app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", userRoutes);

//inserting sample data
// app.get("/testListing", async (req, res) => {
//   const sampleListing = new Listing({
//     title: "My new villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   try {
//     await sampleListing.save();
//     console.log("sample data created!");
//     res.send("successful testing");
//   } catch (err) {
//     console.log("something went wrong");
//   }
// });

app.listen(8080, () => {
  console.log("Server Activated!");
});

//Error Handlers
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong! Try again" } = err;
  res.status(status).render("error.ejs", { message });
});
