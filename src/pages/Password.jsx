import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function UpdatePassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleClick = (e) => {
    if (email && password && checked) {
      if (email.indexOf("@") === -1) {
        setMessage("Email is invalid");
        setError(true);
      } else if (password.length < 8) {
        setMessage("Password must be at least 8 characters long");
        setError(true);
      } else if (newPassword.length < 8) {
        setMessage("Password must be at least 8 characters long");
        setError(true);
      } else {
        fetchAccount();
      }
    } else {
      setMessage("All Fields must be filled");
      setError(true);
    }
  };

  const fetchAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("projectId", "f104bi07c490");

    var raw = JSON.stringify({
      name: "ron",
      email: "ron123@gmail.com",
      passwordCurrent: "123456789",
      password: "123456789",
      appType: "ott",
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/user/password",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          return navigate("/");
        } else {
          setMessage(result.message);
          setError(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      className="login-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid black",
        textAlign: "center",
        height: "450px",
        width: "400px",
        borderRadius: "5px",
        padding: "20px",
        margin: "auto",
      }}
    >
      <div className="left-container">
        <div className="avatar-container"></div>
      </div>
      <div className="right-container" style={{ marginTop: "20px" }}>
        <div className="account">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <span style={{ margin: "0 10px" }}></span>
          <Link to="/register">
            <button className="login-btn">Register</button>
          </Link>
        </div>
        <div className="login-form" style={{ marginTop: "20px" }}>
          <h1>Forgot Your Password?</h1>
          <p className="loginpara">
            Enter the email address you used when you signed up, and we'll help
            you out.
          </p>
          <div className={error ? "errorBox" : "hiddenBox"}>{message}</div>
          <input
            className="loginput"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px", padding: "10px" }}
            required
          />
          <br />
          <input
            className="loginput"
            type="password"
            placeholder="Old Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            style={{ width: "300px", padding: "10px" }}
            required
          />
          <br />
          <input
            className="loginput"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="off"
            style={{ width: "300px", padding: "10px" }}
            required
          />
          <br />
          <div className="capta-container" style={{ marginTop: "10px" }}>
            <div className="input-l">
              <input
                type="checkbox"
                className="checkbox"
                value={checked}
                onChange={handleCheck}
              />
              <p>I'm not a robot</p>
            </div>
            <div className="input-r">
              <p className="recaptcha">
                reCAPTCHA <br />
                <span>Privacy-Terms</span>
              </p>
            </div>
          </div>
          <button
            className="submit-btn"
            type="submit"
            onClick={handleClick}
            style={{ marginTop: "20px", padding: "10px" }}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
