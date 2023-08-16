const express = require("express");
const  createGroup  = require("../controllers/createGroup");

const createGroupRouter = express.Router();

createGroupRouter.post("/group", createGroup);

module.exports = createGroupRouter