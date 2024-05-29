// src/components/LandingPage.js
import React from 'react';
import Navbar from '../Navbar/Navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-page" >
        <p style={{ width: "50%", fontSize: '40px', color: "black", textAlign: "center", fontWeight: "bold" }}>Welcome to our Landing Page, this is a sample landing page with Registration and Login functionalities.</p>
      </div>
    </div>
  );
};

export default LandingPage;