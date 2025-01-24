const express = require("express");
const multer = require("multer");
const path = require("path");
const Media = require("../models/Media");

const router = express.Router();

// Set up file storage using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Upload media (image/video)
router.post("/", upload.single("mediaFile"), async (req, res) => {
  try {
    const { babyProfileId } = req.body;
    const mediaUrl = req.file.path;
    const mediaType = req.file.mimetype.startsWith("image") ? "image" : "video";

    const newMedia = new Media({ babyProfileId, mediaUrl, mediaType });
    await newMedia.save();
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ message: "Error uploading media", error });
  }
});

module.exports = router;
