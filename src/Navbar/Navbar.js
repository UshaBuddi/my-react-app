 // src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Landing Page</h1>
      <div>
        <button className="btn" onClick={() => window.location.href='/register'}>Sign Up</button>
        <button className="btn" onClick={() => window.location.href='/login'}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
