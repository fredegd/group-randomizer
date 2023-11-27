const mongoose = require("mongoose");

const groupProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    max: 300,
  },

  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
});

const GroupProject = mongoose.model("GroupProject", groupProjectSchema);

module.exports = GroupProject;
