const express = require("express");

const {
  getGroupProject,
  getGroupProjects,
  createGroupProject,
  updateGroupProject,
  deleteGroupProject,
} = require("../controllers/groupProjects");

const groupProjectsRouter = express.Router();

groupProjectsRouter.post("/new", createGroupProject);

groupProjectsRouter.put("/:id", updateGroupProject);

groupProjectsRouter.delete("/:id", deleteGroupProject);

groupProjectsRouter.get("/:id", getGroupProject);

groupProjectsRouter.get("/", getGroupProjects);

module.exports = groupProjectsRouter;
