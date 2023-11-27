const Project = require("../models/project_name.js");

const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate([
      { path: "groups", strictPopulate: false },
    ]);
    res.status(200).json({ project });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate([
      { path: "groups", strictPopulate: false },
    ]);
    res.status(200).json({ projects });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const project = Project.findByIdAndUpdate(req.params.id).populate([
      { path: "groups", strictPopulate: false },
    ]);
    res.status(200).json({ project });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ project });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ project });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
