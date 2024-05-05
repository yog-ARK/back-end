const express = require('express');
const test = require('../models/room.js');
const router = express.Router();
const {getRoom,getRoomById,addRoom,changeRoomById,deleteRoom} = require('../controllers/room.controller.js');

// get
router.get('/', getRoom);
// get by id
router.get("/:id", getRoomById);
// add
router.post("/", addRoom);
// update
router.put("/:id", changeRoomById);
// delete
router.delete("/:id", deleteRoom);

module.exports = router;