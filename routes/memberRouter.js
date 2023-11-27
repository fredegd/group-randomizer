const express = require("express");
const {
  getMember,
  getMembers,
  createMember,
  updateMember,
  deleteMember,
} = require("../controllers/members");

const memberRouter = express.Router();

memberRouter.post("/new", createMember);

memberRouter.get("/:id", getMember);

memberRouter.put("/:id", updateMember);

memberRouter.delete("/:id", deleteMember);

memberRouter.get("/", getMembers);

module.exports = memberRouter;
