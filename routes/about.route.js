const express = require("express");
const test = require("../models/about.js");
const router = express.Router();
const {
  getAbout,
  getAboutById,
  addAbout,
  changeAboutById,
  deleteAbout,
} = require("../controllers/about.controller.js");

// get
router.get("/", getAbout);
// get by id
router.get("/:id", getAboutById);
// add
router.post("/", addAbout);
// update
router.put("/:id", changeAboutById);
// delete
router.delete("/:id", deleteAbout);

module.exports = router;
