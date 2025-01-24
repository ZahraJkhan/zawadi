const mongoose = require("mongoose");

const babyProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("BabyProfile", babyProfileSchema);
