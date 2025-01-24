// routes/milestoneRoutes.js
const express = require('express');
const Milestone = require('../models/Milestone');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a Milestone (protected route)
router.post('/', protect, async (req, res) => {
  const { title, description, date, babyProfileId } = req.body;

  try {
    const newMilestone = new Milestone({
      title,
      description,
      date,
      babyProfileId,
      userId: req.user, // Store the userId from the JWT
    });

    await newMilestone.save();
    res.status(201).json(newMilestone);
  } catch (error) {
    res.status(500).json({ message: 'Error saving milestone', error });
  }
});

// Get Milestones for a specific baby (protected route)
router.get('/:babyProfileId', protect, async (req, res) => {
  const { babyProfileId } = req.params;

  try {
    const milestones = await Milestone.find({ babyProfileId, userId: req.user });
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching milestones', error });
  }
});

module.exports = router;
