import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Zawadi</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Baby Profile</a>
        <a href="/milestones">Milestones</a>
        <a href="/upload-media">Upload Media</a>
        <a href="/growth-tracking">Growth Tracking</a>
      </div>
    </nav>
  );
};

export default Navbar;
