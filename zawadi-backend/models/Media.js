const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  babyProfileId: { type: mongoose.Schema.Types.ObjectId, ref: "BabyProfile", required: true },
  mediaUrl: { type: String, required: true },
  mediaType: { type: String, required: true }, // 'image' or 'video'
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Media", mediaSchema);
