const express = require("express");
const {
  getGroup,
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} = require("../controllers/groups");

const groupRouter = express.Router();


groupRouter.get("/:id", getGroup);

groupRouter.put("/:id", updateGroup);

groupRouter.delete("/:id", deleteGroup);

groupRouter.post("/newGroup", createGroup);

groupRouter.get("/", getGroups);

module.exports = groupRouter;