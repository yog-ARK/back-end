const test = require("../models/room.js");

const getRoom = async (req, res) => {
  try {
    const datatest = await test.find();
    res.status(200).json(datatest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRoomById = async (req, res) => {
  try {
    const datatest = await test.findById(req.params.id);
    res.status(200).json(datatest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addRoom = async (req, res) => {
  try {
    const datatest = await test.create(req.body);
    res.status(200).json(datatest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const changeRoomById = async (req, res) => {
  try {
    const datatest = await test.findByIdAndUpdate(req.params.id, req.body);

    if (!datatest) {
      return res.status(404).json({ message: "Room not found" });
    }

    const updatedTest = await test.findById(req.params.id);
    res.status(200).json({ datatest: datatest, updatedTest: updatedTest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const datatest = await test.findByIdAndDelete(req.params.id);
    if (!datatest) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ datatest: datatest, message: "Room deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRoom,
  getRoomById,
  addRoom,
  changeRoomById,
  deleteRoom,
};
