const express = require("express");
const  {createGroup,updateGroup}  = require("../controllers/createGroup");

const createGroupRouter = express.Router();

createGroupRouter.post("/group", createGroup);
createGroupRouter.put("/group", updateGroup);

module.exports = createGroupRouter