const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;