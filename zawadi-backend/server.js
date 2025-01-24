const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { protect } = require("./middleware/authMiddleware"); // Import the protect middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
const authRoutes = require("./routes/authRoutes"); // Add your auth routes (login, register)
const babyProfileRoutes = require("./routes/babyProfileRoutes");
const milestoneRoutes = require("./routes/milestoneRoutes");
const mediaRoutes = require("./routes/mediaRoutes");

// Use authentication routes
app.use("/api/auth", authRoutes); // Register the auth routes

// Use protected routes
app.use("/api/baby_profile", protect, babyProfileRoutes); // Only authenticated users can create/update baby profiles
app.use("/api/milestones", protect, milestoneRoutes); // Only authenticated users can create/update milestones
app.use("/api/media", protect, mediaRoutes); // Only authenticated users can upload media

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
