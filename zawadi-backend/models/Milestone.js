const mongoose = require("mongoose");

const milestoneSchema = new mongoose.Schema({
  babyProfileId: { type: mongoose.Schema.Types.ObjectId, ref: "BabyProfile", required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Milestone", milestoneSchema);
