// module NPM
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

//passport config
require("./config/passport")(passport);

// using express
const app = express();
app.use(express.json());

// port
const port = process.env.port || 5000;

// module custom
const db = require("./config/keys.js").mongoURL; // url mongodb
const mainRoute = require("./routes/main.route.js"); // main room
const roomRoute = require("./routes/room.route.js"); // route room
const exploreRoute = require("./routes/explore.route.js"); // route explore
const aboutRoute = require("./routes/about.route.js"); // route about

// mongoose connect
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`DB connected ${db}`))
  .catch((err) => console.log(err));

// ejs
app.set("view engine", "ejs");

//bodyparser
app.use(express.urlencoded({ extended: false }));

// express session middleware

app.use(
  session({
    secret: "rahasia",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

// global var
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// static express
app.use(express.static("public"));

// routes
app.use("/", mainRoute);
app.use("/api/room", roomRoute);
app.use("/api/explore", exploreRoute);
app.use("/api/about", aboutRoute);
app.use("/users", require("./routes/users"));

// login
app.get("/login", (req, res) => {
  res.render("login");
});

// register
app.get("/register", (req, res) => {
  res.render("register");
});

// payment
app.get("/payment", (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  res.render("payment", { title: "VIMIGA | Payment", username: username });
});

const aboutModel = require("./models/about");

// crud
app.get("/crud", async (req, res) => {
  res.render("crud");
});

app.put("/updateAbout", async (req, res) => {
  try {
    const { titled, desc } = req.body;

    const updatedData = await aboutModel.findOneAndUpdate(
      { titled: "5 Star Hotel" }, // Filter
      { titled, desc }, // Data to update
      { new: true } // Return the updated document
    );

    if (updatedData) {
      res.redirect("/crud");
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.error("Error updating page data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
