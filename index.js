const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.port || 5000;

// ejs
app.set("view engine", "ejs");

// static express
app.use(express.static("public"));

// index/Home
app.get("/", (req, res) => {
    res.render("index")/*, { title: "VIMIGA | Resort and Hotel" }*/;
});

// about
app.get("/about", (req, res) => {
    res.render("about")/*, { title: "VIMIGA | About" }*/;
});

// room
app.get("/room", (req, res) => {
    res.render("room")/*, { title: "VIMIGA | Rooms" }*/;
});

// service
app.get("/service", (req, res) => {
    res.render("service")/*, { title: "VIMIGA | Services" }*/;
});

// explore
app.get("/explore", (req, res) => {
    res.render("explore")/*, { title: "VIMIGA | Explore" }*/;
});

// contact
app.get("/contact", (req, res) => {
    res.render("contact")/*, { title: "VIMIGA | Contact" }*/;
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});