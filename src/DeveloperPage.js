import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeveloperLanding = () => {
  const Data = JSON.parse(localStorage.getItem('userData'));
  const history = useNavigate();

  const handleLogout = () => {
    history('/');
  };
  return (
    <div>
      <h1 style={{ maxWidth: "85%" }} >Developer Page</h1>
      <button style={{ maxWidth: "15%", float: "right", position: 'relative', bottom: '60px', marginRight: "10px" }} onClick={handleLogout}>Logout</button>
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
          </tr>
        </thead>
        <tbody>
          <tr key={Data.id}>
            <td>1</td>
            <td>{Data.firstName}</td>
            <td>{Data.lastName}</td>
            <td>{Data.email}</td>
            <td>{Data.dob}</td>
            <td>{Data.gender}</td>
            <td>{Data.role}</td>
            <td>{Data.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeveloperLanding;
