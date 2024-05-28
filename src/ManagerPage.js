import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagerLanding = () => {
    const Data = JSON.parse(localStorage.getItem('userData')); 
    const history = useNavigate();

    const handleLogout = () => {
      history('/');
    };
    return (
      <div>
        <h1>Manager Landing Page</h1>
        <p>Email: {Data.email}</p>
        <p>Role: {Data.role}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

export default ManagerLanding;
