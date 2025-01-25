import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Zawadi</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/baby_profile">Baby Profile</Link></li>
          <li><Link to="/milestones">Milestones</Link></li>
          <li><Link to="/upload_media">Upload Media</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
