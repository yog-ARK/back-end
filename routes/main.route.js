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

const { ensureAuthenticated } = require("../config/auth");

// index/Home
router.get("/", index, ensureAuthenticated);
// about
router.get("/about", about, ensureAuthenticated);
// room
router.get("/room", room, ensureAuthenticated);
// service
router.get("/service", service, ensureAuthenticated);
// explore
router.get("/explore", explore, ensureAuthenticated);
// contact
router.get("/contact", contact, ensureAuthenticated);

module.exports = router;
