const express = require("express");
const Milestone = require("../models/Milestone");

const router = express.Router();

// Create Milestone
router.post("/", async (req, res) => {
  try {
    const { babyProfileId, date, description } = req.body;
    const newMilestone = new Milestone({ babyProfileId, date, description });
    await newMilestone.save();
    res.status(201).json(newMilestone);
  } catch (error) {
    res.status(500).json({ message: "Error saving milestone", error });
  }
});

module.exports = router;
