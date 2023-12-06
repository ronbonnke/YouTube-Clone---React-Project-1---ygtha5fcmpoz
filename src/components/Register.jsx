import React from "react";
import { Button, Container, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import "../styles/Register.css";

const Register = ({ setLoggedInStatus, setUserName, setEMail }) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("");
  const [sign, setSign] = useState("");

  const handleusername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setError("All Fields must be filled");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("Email is invalid");
      setColor("red");
    } else {
      try {
        (async function () {
          var raw = JSON.stringify({
            name: `${username}`,
            email: `${email}`,
            password: `${password}`,
            appType: "ott",
          });
          console.log(raw);
          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Set content type to JSON
                projectId: "f104bi07c490",
              },

              body: raw,
              redirect: "follow",
            }
          );

          if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem(
              `signup`,
              JSON.stringify({
                sign: responseData,
              })
            );
            setError("Registered successfully");
            setColor("green");
            setSign(true);
            setUserName(username);
            setEMail(email);
            setLoggedInStatus(true);
          } else {
            console.log("Registration Failed", response);
            setError("Incorrect Email or password");
            setColor("red");
          }
        })();
      } catch (error) {
        console.error("An error occurred: ", error);
        setError("An error occurred while registering");
        setColor("red");
      }
    }
  };
  return (
    <div
      className="Register"
    
    >
      <form
        style={{
          border: "2px solid white",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", justifyContent: "center" }}>
          <img
            style={{ height: "70px", alignItems: "center" }}
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            alt=""
          />
        </div>
        <h2
          style={{
            color: "#363636",
            paddingBottom: "20px",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          {" "}
          Sign in{" "}
        </h2>

        <Input
          className="Inputbox"
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={handleusername}
        />
        <br />

        <Input
          className="Inputbox"
          type="text"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <Input
          className="Inputbox"
          type="password"
          placeholder="Create a Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <div
          style={{ color: color, marginLeft: "8%", marginTop: "2%" }}
          className="error"
        >
          {error}
        </div>

        {sign ? (
          <></>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "35px",
              }}
            >
              <div
                style={{
                  textAlign: "center",

                  // marginLeft: "25%",
                  marginTop: "15px",
                  marginLeft: "60px",
                  
                  // color: "black",
                  // marginBottom: "15px",
                }}
              >
                Already registered?{" "}
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <span style={{ color: "black", fontSize: "15px",
                  fontWeight:"bolder", textAlign: "center"}}>
                    Login
                  </span>
                </Link>{" "}
              </div>

              <div
                style={{
                  cursor: "pointer",
                  color: "white",
                  fontSize: "18px",
                  fontWeight:"bolder",
                  textAlign: "center",
                  width: "75px",
                  height: "40px",
                  marginRight: "55px",
                  borderRadius: "5px",
                  background: "#318CE7",
                  padding: "10px",
                }}
                onClick={handleLogin}
              >
                Next
              </div>
            </div>

            <br />
          </>
        )}
      </form>
    </div>
  );
};
export default Register;
