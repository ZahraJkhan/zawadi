import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Changed Switch to Routes
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BabyProfile from "./pages/BabyProfile";
import Milestones from "./pages/Milestones";
import UploadMedia from "./pages/UploadMedia";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes> {/* Changed Switch to Routes */}
            <Route path="/" element={<Home />} /> {/* Updated component prop to element */}
            <Route path="/about" element={<About />} /> {/* Updated component prop to element */}
            <Route path="/baby_profile" element={<BabyProfile />} /> {/* Updated component prop to element */}
            <Route path="/milestones" element={<Milestones />} /> {/* Updated component prop to element */}
            <Route path="/upload_media" element={<UploadMedia />} /> {/* Updated component prop to element */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
