// module NPM
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
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
    .catch(err => console.log(err));

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
    res.render("login")/*, { title: "VIMIGA | Login" }*/;
});

// crud TEST
app.get("/crud", (req, res) => {
    res.render("crud")/*, { title: "VIMIGA | Test" }*/;
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});