// src/components/LandingPage.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-page-content">
        <h2>Welcome to our Landing Page</h2>
        <p>This is a sample landing page with registration and login functionality.</p>
      </div>
    </div>
  );
};

export default LandingPage;
