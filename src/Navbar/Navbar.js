import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Landing Page</h1>
      <div>
        <button className="btnsignup" onClick={() => window.location.href = '/register'}>Sign Up</button>
        <button className="btnsignin" onClick={() => window.location.href = '/login'}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
