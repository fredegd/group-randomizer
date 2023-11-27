const Member = require('../models/member');

const getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        res.status(200).json({ member });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json({ members });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateMember = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const member = Member.findByIdAndUpdate(req.params.id);
        res.status(200).json({ member });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createMember = async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.status(201).json({ member });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        res.status(200).json({ member });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getMember,
    getMembers,
    createMember,
    updateMember,
    deleteMember
}

