const express = require("express");
const test = require("../models/explore.js");
const router = express.Router();
const {
  getExplore,
  getExploreById,
  addExplore,
  changeExploreById,
  deleteExplore,
} = require("../controllers/explore.controller.js");

// get
router.get("/", getExplore);
// get by id
router.get("/:id", getExploreById);
// add
router.post("/", addExplore);
// update
router.put("/:id", changeExploreById);
// delete
router.delete("/:id", deleteExplore);

module.exports = router;
