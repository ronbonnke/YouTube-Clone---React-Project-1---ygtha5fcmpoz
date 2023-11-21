import React, { useState } from 'react';
import axios from "../API/axios";
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          name: "test6969",
          email: "test6969@gmail.com",
          passwordCurrent: currentPassword,
          password: newPassword,
          appType: "ott",
        },
        {
          headers: {
            'projectID': 'f104bi07c490',
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );

      const data = response.data;

      if (data.status === "success") {
        // Password updated successfully
        console.log("Password updated successfully");
        navigate('/'); // Navigate to the home page
      } else {
        setError(data.message || "An error occurred while updating the password");
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setError("An error occurred while updating the password");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '10px',
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#008080",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <label style={{ fontSize: "18px", marginBottom: "15px", display: "block" }}>Current Password</label>
      <input
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        style={inputStyle}
      />

      <label style={{ fontSize: "18px", marginBottom: "15px", display: "block" }}>New Password</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={inputStyle}
      />

      <label style={{ fontSize: "18px", marginBottom: "15px", display: "block" }}>Confirm New Password</label>
      <input
        type="password"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        style={inputStyle}
      />

      {error && <p style={errorStyle}>{error}</p>}

      <button
        type="button"
        onClick={handleUpdatePassword}
        style={buttonStyle}
      >
        Update Password
      </button>
    </div>
  );
};

export default UpdatePassword;
