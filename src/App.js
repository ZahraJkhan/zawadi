import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Changed Switch to Routes
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BabyProfile from "./pages/BabyProfile";
import Milestones from "./pages/Milestones";
import UploadMedia from "./pages/UploadMedia";
import Login from "./pages/Login";  // Import the Login component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes> {/* Changed Switch to Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/baby_profile" element={<BabyProfile />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/upload_media" element={<UploadMedia />} />
            <Route path="/login" element={<Login />} /> {/* Route for Login */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
