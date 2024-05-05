const aboutModel = require("../models/about");
const roomModel = require("../models/room");
const exploreModel = require("../models/explore");

// index/Home
const index = (req, res) => {
  res.render("index", { title: "VIMIGA | Home" });
};

// about
const about = async (req, res) => {
  try {
    const pageData = await aboutModel.findOne({ titled: "5 Star Hotel" });
    if (pageData) {
      // If page data is found in the database, extract the values
      const { titled, desc } = pageData;

      // Pass the values to the EJS template
      res.render("about", { title: "VIMIGA | About", titled, desc });
    } else {
      // If page data is not found, render the template with default values or handle the error accordingly
      res.render("about", {
        title: "VIMIGA | About",
        titled: "Blank",
        desc: "Blank",
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
  try {
    // Fetch room data from MongoDB
    const rooms = await roomModel.find(); // Assuming Room is your Mongoose model

    // Render the EJS template and pass room data
    res.render("room", { title: "VIMIGA | Rooms", rooms });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

// service
const service = (req, res) => {
  res.render("service", { title: "VIMIGA | Services" });
};

// explore
const explore = async (req, res) => {
  try {
    // Fetch room data from MongoDB
    const explore = await exploreModel.find(); // Assuming Room is your Mongoose model

    // Render the EJS template and pass room data
    res.render("explore", { title: "VIMIGA | Explore", explore });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

// contact
const contact = (req, res) => {
  res.render("contact", { title: "VIMIGA | Contact" });
};

module.exports = {
  index,
  about,
  room,
  service,
  explore,
  contact,
};
