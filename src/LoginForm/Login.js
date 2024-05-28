
import React, { useState , useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login= ()  => {
  const [loginData, setLoginData] = useState([]);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const history = useNavigate();

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  // Load records from localStorage when the component mounts
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('loginData'));
    if (storedRecords) {
      setLoginData(storedRecords);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const registeredData = JSON.parse(localStorage.getItem('records'));
      const userFound = registeredData.find(user => user.email === form.email);
      localStorage.setItem('userData',  JSON.stringify(userFound));
      // var data = localStorage.getItem('userData');
      // console.log(data, 'data', userFound, 'userFound')
      if (!userFound) {
        setError('User not registered.');
      } else if (userFound.password !== form.password) {
        setError('Incorrect password.');
      } else {
        setError('');
        alert('Login successful!');
  
    if (userFound.role === 'HR') {
      history('/hr');
    } else if (userFound.role === 'Manager') {
      history('/manager');
    } else if (userFound.role === 'Developer') {
      history('/developer');
    }
    setForm({ email: '',
    password: '',
  }); // Reset form data after submission
        // Redirect to another page or perform other actions as needed
      }
      
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
          
        </label>
        
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
