// module NPM
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// using express
const app = express();
app.use(express.json());

// Parse URL-encoded bodies for form data
app.use(bodyParser.urlencoded({ extended: true }));

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

// static express
app.use(express.static("public"));

// routes
app.use("/", mainRoute);
app.use("/api/room", roomRoute);
app.use("/api/explore", exploreRoute);
app.use("/api/about", aboutRoute);

// login
app.get("/login", (req, res) => {
  res.render("login") /*, { title: "VIMIGA | Login" }*/;
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
