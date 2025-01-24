// routes/mediaRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const Media = require('../models/Media');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify your file storage directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique file name
  },
});

const upload = multer({ storage });

// Upload Media (protected route)
router.post('/', protect, upload.single('file'), async (req, res) => {
  const { babyProfileId } = req.body;
  const { file } = req;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const newMedia = new Media({
      filePath: file.path,
      mediaType: file.mimetype, // Store the media type (image/video)
      babyProfileId,
      userId: req.user, // Store the userId from the JWT
    });

    await newMedia.save();
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading media', error });
  }
});

// Get Media for a specific baby (protected route)
router.get('/:babyProfileId', protect, async (req, res) => {
  const { babyProfileId } = req.params;

  try {
    const media = await Media.find({ babyProfileId, userId: req.user });
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching media', error });
  }
});

module.exports = router;
