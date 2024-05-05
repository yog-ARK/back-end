const test = require('../models/explore.js');

const getExplore = async (req, res) => {
    try {
        const datatest = await test.find();
        res.status(200).json(datatest);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getExploreById = async (req, res) => {
    try {
        const datatest = await test.findById(req.params.id);
        res.status(200).json(datatest);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addExplore = async (req, res) => {
    try {
        const datatest = await test.create(req.body);
        res.status(200).json(datatest);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const changeExploreById = async (req, res) => {
    try {
        const datatest = await test.findByIdAndUpdate(req.params.id, req.body);
        
        if (!datatest) {
            return res.status(404).json({message: "Explore not found"});
        }
        
        const updatedTest = await test.findById(req.params.id);
        res.status(200).json({ datatest: datatest, updatedTest: updatedTest });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteExplore = async (req, res) => {
    try {
        const datatest = await test.findByIdAndDelete(req.params.id);
        if (!datatest) {
            return res.status(404).json({message: "Explore not found"});
        }
        res.status(200).json({datatest: datatest, message: "Explore deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getExplore,
    getExploreById,
    addExplore,
    changeExploreById,
    deleteExplore
}