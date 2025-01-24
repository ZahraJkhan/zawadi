const express = require("express");
const BabyProfile = require("../models/BabyProfile");

const router = express.Router();

// Create Baby Profile
router.post("/", async (req, res) => {
  try {
    const { name, birthdate, weight, height, userId } = req.body;
    const newBabyProfile = new BabyProfile({ name, birthdate, weight, height, userId });
    await newBabyProfile.save();
    res.status(201).json(newBabyProfile);
  } catch (error) {
    res.status(500).json({ message: "Error saving baby profile", error });
  }
});

// Get Baby Profiles (for a user)
router.get("/", async (req, res) => {
  try {
    const babyProfiles = await BabyProfile.find({ userId: req.query.userId });
    res.json(babyProfiles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching baby profiles", error });
  }
});

module.exports = router;
