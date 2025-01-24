const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

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
const babyProfileRoutes = require("./routes/babyProfileRoutes");
const milestoneRoutes = require("./routes/milestoneRoutes");
const mediaRoutes = require("./routes/mediaRoutes");

app.use("/api/baby_profile", babyProfileRoutes);
app.use("/api/milestones", milestoneRoutes);
app.use("/api/media", mediaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
