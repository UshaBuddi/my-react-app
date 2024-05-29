import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './App.css';

const HrLanding = () => {
    const Data = JSON.parse(localStorage.getItem('userData'));
    const userData = JSON.parse(localStorage.getItem('records'));
    const history = useNavigate();
    const [records, setRecords] = useState([]);
    const handleLogout = () => {
        history('/');
    };
    useEffect(() => {
        const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
        setRecords(storedRecords);
    }, []);
    const handleEdit = (userId) => {
        history(`/edit-user/${userId}`);
        userId &&
            localStorage.setItem('userId', JSON.stringify(userId));
    };
    const handleRemove = (userId) => {
        const updatedRecords = records.filter(record => record.id !== userId);
        setRecords(updatedRecords);
        localStorage.setItem('records', JSON.stringify(updatedRecords));
        console.log(`Remove user with ID: ${userId}`, userData);
    };
    return (
        <div>
            <h1 style={{ maxWidth: "85%" }} >HR Page</h1>
            <button style={{ maxWidth: "15%", float: "right", position: 'relative', bottom: '60px', marginRight: "10px" }} onClick={handleLogout}>Logout</button>
            <p>Email: {Data.email}</p>
            <p>Role: {Data.role}</p>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>DOB</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                            <td>{user.gender}</td>
                            <td>{user.role}</td>
                            <td>{user.address}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)}>
                                    <FaEdit />
                                </button>
                                <button style={{ marginLeft: "10px" }} onClick={() => handleRemove(user.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default HrLanding;
