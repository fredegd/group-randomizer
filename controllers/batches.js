const Batch = require("../models/batch");


// getBatch, getBatches, createBatch, updateBatch, deleteBatch

const getBatch = async (req, res) => {
    try {
        const batch = await Batch.findById(req.params.id).populate([{path:"members", strictPopulate: false}]).populate([{path:"groups", strictPopulate: false}]);
        res.status(200).json({ batch });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getBatches = async (req, res) => {
    try {
        const batches = await Batch.find().populate([{path:"members", strictPopulate: false}]).populate([{path:"groups", strictPopulate: false}]);;
        res.status(200).json({ batches });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createBatch = async (req, res) => {
    try {
        console.log(req.body);
        const batch = await Batch.create(req.body);
        res.status(201).json({ batch });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateBatch = async (req, res) => {
     try{
        const id = req.params.id;
        const body = req.body;

        const batch = await Batch.findByIdAndUpdate(id, body, { new: true }).populate([{path:"members", strictPopulate: false}]).populate([{path:"groups", strictPopulate: false}]);;
        res.status(200).json({ batch });
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

const deleteBatch = async (req, res) => {
    try {
        const batch = await Batch.findByIdAndDelete(req.params.id);
        res.status(200).json({ batch });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}   


module.exports = {
    getBatch,
    getBatches,
    createBatch,
    updateBatch,
    deleteBatch,
}