const test = require('../models/test');

const getTest = async (req, res) => {
    try {
        const datatest = await test.find();
        res.status(200).json(datatest);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getTestById = async (req, res) => {
    try {
        const datatest = await test.findById(req.params.id);
        res.status(200).json(datatest);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addTest = async (req, res) => {
    try {
        const datatest = await test.create(req.body);
        res.status(200).json(datatest);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const changeTestById = async (req, res) => {
    try {
        const datatest = await test.findByIdAndUpdate(req.params.id, req.body);
        
        if (!datatest) {
            return res.status(404).json({message: "Test not found"});
        }
        
        const updatedTest = await test.findById(req.params.id);
        res.status(200).json({ datatest: datatest, updatedTest: updatedTest });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteTest = async (req, res) => {
    try {
        const datatest = await test.findByIdAndDelete(req.params.id);
        if (!datatest) {
            return res.status(404).json({message: "Test not found"});
        }
        res.status(200).json({datatest: datatest, message: "Test deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getTest,
    getTestById,
    addTest,
    changeTestById,
    deleteTest
}