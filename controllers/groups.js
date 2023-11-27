const jwt = require("jsonwebtoken");

const Group = require("../models/group");

const getGroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    res.status(200).json({ group });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json({ groups });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json({ group });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const updateGroup = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const group = Group.findByIdAndUpdate({id, body});
    res.status(200).json({ group });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    res.status(200).json({ group });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createGroup, updateGroup, getGroup, getGroups, deleteGroup };
