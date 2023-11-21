import React from 'react';
import "./DropdownMenu.css";
import { Link, useNavigate } from 'react-router-dom';

function DropdownMenu({ profile }) {
  const userData = JSON.parse(localStorage.getItem('user'));
  const username = userData ? userData.name : null;
  const userEmail = userData ? userData.email : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage or perform any other logout actions
    localStorage.clear();
    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button">
        {profile}
      </button>
      <div className="dropdown-content">
        <p>Username: {username}</p>
        <p>Email: {userEmail}</p>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default DropdownMenu;
