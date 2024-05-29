
import React, { useState, useEffect } from 'react';
import './Register.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
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
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setshowConfirmPassword(!showConfirmPassword);
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
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          dob: '',
          gender: '',
          role: '',
          address: ''
        });
        alert('Registration successful!');
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name:</label>
          <input className="form-group" type="text" name="firstName" value={form.firstName} onChange={handleChange} />
          {errors.firstName && <span>{errors.firstName}</span>}

        </div>
        <div className="form-group">
          <label>
            Last Name:</label>
          <input className="form-group" type="text" name="lastName" value={form.lastName} onChange={handleChange} />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>
            Email:</label>
          <input className="form-group" type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group" style={{ marginBottom: '-6%' }}>
          <label>
            Password:</label>
          <input className="form-group" type={showPassword ? 'text' : 'password'}
            name="password" value={form.password} onChange={handleChange} />
          <span
            onClick={togglePasswordVisibility}
            className="password-toggle-icon"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="form-group" style={{ marginBottom: '-6%' }}>
          <label>
            Confirm Password:</label>
          <input className="form-group" type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="password-toggle-icon"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

        </div>
        <div className="form-group">
          <label>
            Date of Birth:</label>
          <input className="form-group" type="date" name="dob" value={form.dob} onChange={handleChange} />
          {errors.dob && <span>{errors.dob}</span>}
        </div>
        <label style={{ marginBottom: "-2%" }}>
          Gender:</label>
        <select className="custom-select" name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
        <label style={{ marginBottom: "-2%" }}>
          Role:</label>
        <select name="role" value={form.role} onChange={handleChange} className="custom-select">
          <option value="">Select</option>
          {roles.map(role => <option key={role} value={role}>{role}</option>)}
        </select>
        {errors.role && <span>{errors.role}</span>}
        <div className="form-group">
          <label>
            Address:</label>
          <textarea className="form-group" name="address" value={form.address} onChange={handleChange}></textarea>
          {errors.address && <span>{errors.address}</span>}

        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
