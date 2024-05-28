// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Register from './RegistrationForm/Register';
import Login from './LoginForm/Login';
// import ProtectedRoute from './ProtectedRoute';
// import Dashboard from './Dashboard';
import HrLanding from './HRPage';
import ManagerLanding from './ManagerPage';
import DeveloperLanding from './DeveloperPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <LandingPage/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/login" element={ <Login/> } />
          {/* <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> }/> */}
          <Route path="/hr" element={<HrLanding/>} />
        <Route path="/manager" element={<ManagerLanding/>} />
        <Route path="/developer" element={<DeveloperLanding/>} />
          {/* <Route path="*" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
