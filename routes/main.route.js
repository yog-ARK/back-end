const express = require('express');
const router = express.Router();
const {index,about,room,service,explore,contact} = require('../controllers/main.controller.js');

// index/Home
router.get('/', index);
// get by id
router.get("/about", about);
// add
router.get("/room", room);
// update
router.get("/service", service);
// delete
router.get("/explore", explore);
// contact
router.get("/contact", contact);

module.exports = router;