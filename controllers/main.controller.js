const aboutModel = require("../models/about");
const roomModel = require("../models/room");
const exploreModel = require("../models/explore");

// index/Home
const index = (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  res.render("index", { title: "VIMIGA | Home", username: username });
};

// about
const about = async (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  try {
    const pageData = await aboutModel.findOne({ n: "1" });
    if (pageData) {
      // If page data is found in the database, extract the values
      const { titled, desc } = pageData;

      // Pass the values to the EJS template
      res.render("about", {
        title: "VIMIGA | About",
        titled,
        desc,
        username: username,
      });
    } else {
      // If page data is not found, render the template with default values or handle the error accordingly
      res.render("about", {
        title: "VIMIGA | About",
        titled: "Blank",
        desc: "Blank",
        username: username,
      });
    }
  } catch (error) {
    // Handle errors
    console.error("Error fetching page data:", error);
    res.status(500).send("Internal Server Error");
  }
};

// room
const room = async (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  try {
    // Fetch room data from MongoDB
    const rooms = await roomModel.find(); // Assuming Room is your Mongoose model

    // Render the EJS template and pass room data
    res.render("room", {
      title: "VIMIGA | Rooms",
      rooms,
      username: username,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

// service
const service = (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  res.render("service", {
    title: "VIMIGA | Services",
    username: username,
  });
};

// explore
const explore = async (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  try {
    // Fetch room data from MongoDB
    const explore = await exploreModel.find(); // Assuming Room is your Mongoose model

    // Render the EJS template and pass room data
    res.render("explore", {
      title: "VIMIGA | Explore",
      explore,
      username: username,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

// contact
const contact = (req, res) => {
  const username = req.user ? req.user.name : "Guest";
  res.render("contact", { title: "VIMIGA | Contact", username: username });
};

module.exports = {
  index,
  about,
  room,
  service,
  explore,
  contact,
};
