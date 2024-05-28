import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const HrLanding = () => {
  const Data = JSON.parse(localStorage.getItem('userData')); 
  const userData = JSON.parse(localStorage.getItem('records')); 
  const history = useNavigate();

  const handleLogout = () => {
    history('/');
  };
  const handleEdit = (userId) => {
    // Handle the edit action, e.g., navigate to an edit page or open a modal
    console.log(`Edit user with ID: ${userId}`);
  };
  return (
    <div>
      <h1>HR Landing Page</h1>
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
          <th>Edit</th>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HrLanding;
