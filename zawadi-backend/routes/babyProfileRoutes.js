const express = require('express');
const BabyProfile = require('../models/BabyProfile');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create Baby Profile (protected)
router.post('/', protect, async (req, res) => {
  const { name, birthdate, weight, height } = req.body;

  try {
    const newBabyProfile = new BabyProfile({
      name,
      birthdate,
      weight,
      height,
      userId: req.user, // Store the userId from the JWT
    });
    await newBabyProfile.save();
    res.status(201).json(newBabyProfile);
  } catch (error) {
    res.status(500).json({ message: 'Error saving baby profile', error });
  }
});

// Get Baby Profiles (for a user, protected)
router.get('/', protect, async (req, res) => {
  try {
    const babyProfiles = await BabyProfile.find({ userId: req.user });
    res.json(babyProfiles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching baby profiles', error });
  }
});

module.exports = router;

