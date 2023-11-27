const express = require("express");

const {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

const projectsRouter = express.Router();

projectsRouter.post("/new", createProject);

projectsRouter.put("/:id", updateProject);

projectsRouter.delete("/:id", deleteProject);

projectsRouter.get("/:id", getProject);

projectsRouter.get("/", getProjects);

module.exports = projectsRouter;
