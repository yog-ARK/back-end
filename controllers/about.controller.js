const test = require("../models/about.js");

const getAbout = async (req, res) => {
  try {
    const datatest = await test.find();
    res.status(200).json(datatest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAboutById = async (req, res) => {
  try {
    const datatest = await test.findById(req.params.id);
    res.status(200).json(datatest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addAbout = async (req, res) => {
  try {
    const datatest = await test.create(req.body);
    res.status(200).json(datatest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const changeAboutById = async (req, res) => {
  try {
    const datatest = await test.findByIdAndUpdate(req.params.id, req.body);

    if (!datatest) {
      return res.status(404).json({ message: "About not found" });
    }

    const updatedTest = await test.findById(req.params.id);
    res.status(200).json({ datatest: datatest, updatedTest: updatedTest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAbout = async (req, res) => {
  try {
    const datatest = await test.findByIdAndDelete(req.params.id);
    if (!datatest) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(200).json({ datatest: datatest, message: "About deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAbout,
  getAboutById,
  addAbout,
  changeAboutById,
  deleteAbout,
};
