const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 300,
  },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
