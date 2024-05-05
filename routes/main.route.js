const express = require("express");
const router = express.Router();
const {
  index,
  about,
  room,
  service,
  explore,
  contact,
} = require("../controllers/main.controller.js");

// index/Home
router.get("/", index);
// about
router.get("/about", about);
// room
router.get("/room", room);
// service
router.get("/service", service);
// explore
router.get("/explore", explore);
// contact
router.get("/contact", contact);

module.exports = router;
