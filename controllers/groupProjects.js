const GroupProject = require('../models/groupProject'); 

const getGroupProject = async (req, res) => {
    try {
        const groupProject = await GroupProject.findById(req.params.id);
        res.status(200).json({ groupProject });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getGroupProjects = async (req, res) => {  
    try {
        const groupProjects = await GroupProject.find();
        res.status(200).json({ groupProjects });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateGroupProject = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const groupProject = GroupProject.findByIdAndUpdate(req.params.id);
        res.status(200).json({ groupProject });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createGroupProject = async (req, res) => {
    try {
        const groupProject = await GroupProject.create(req.body);
        res.status(201).json({ groupProject });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteGroupProject = async (req, res) => {
    try {
        const groupProject = await GroupProject.findByIdAndDelete(req.params.id);
        res.status(200).json({ groupProject });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getGroupProject,
    getGroupProjects,
    createGroupProject,
    updateGroupProject,
    deleteGroupProject
}
