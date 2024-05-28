// src/components/Register.js
import React, { useState , useEffect } from 'react';
import './Register.css';
import Login from '../LoginForm/Login';
// import { isVisible } from '@testing-library/user-event/dist/utils';

const roles = ['HR', 'Manager', 'Developer'];

const Register = () => {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    role: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  // Load records from localStorage when the component mounts
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records'));
    if (storedRecords) {
      setRecords(storedRecords);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'First Name is required';
    if (!form.lastName) newErrors.lastName = 'Last Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!form.dob) newErrors.dob = 'Date of Birth is required';
    const age = new Date().getFullYear() - new Date(form.dob).getFullYear();
    if (age < 18 || age > 60) newErrors.dob = 'Age must be between 18 and 60';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.role) newErrors.role = 'Role is required';
    if (!form.address) newErrors.address = 'Address is required';
    if (form.address.length < 10 || form.address.length > 100) newErrors.address = 'Address must be between 10 and 100 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const registeredData = JSON.parse(localStorage.getItem('records'));
    const userExists = registeredData.some(user => user.email === form.email);

    if (userExists) {
      setError('Username already exists.');
    } else {
      setError('');
      
      const newRecord = { id: records.length + 1, ...form };
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setForm({ firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    role: '',
    address: '' }); 
    alert('Registration successful!');
      // registeredData.push(JSON.stringify(updatedRecords));
      
      // Redirect to another page or perform other actions as needed
    }
      // Reset form data after submission
    }
  };

  return (
    <div className="register-form">
      {/* {console.log(records, 'records')} */}
      {records.length >= 0 &&
      <div style={{display:'none'}}>
        {/* {console.log(records,'loginrecords')} */}
        
      <Login records={records} /></div>}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <span>{errors.firstName}</span>}
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <span>{errors.lastName}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={form.dob} onChange={handleChange} />
          {errors.dob && <span>{errors.dob}</span>}
        </label>
        <label>
          Gender:
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span>{errors.gender}</span>}
        </label>
        <label>
          Role:
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="">Select</option>
            {roles.map(role => <option key={role} value={role}>{role}</option>)}
          </select>
          {errors.role && <span>{errors.role}</span>}
        </label>
        <label>
          Address:
          <textarea name="address" value={form.address} onChange={handleChange}></textarea>
          {errors.address && <span>{errors.address}</span>}
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
        {/* {console.log(records,'records')} */}
      </form>
    </div>
  );
};

export default Register;
