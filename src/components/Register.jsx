import React from "react";
import { Button, Container, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";

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

    

    <Container
      sx={{
        bg: "white",
        width: "30%",
        marginLeft: "38%",
        marginTop: "50px",
        borderRadius: "10px",
        height: "530px",
        border: "1px solid lightgrey",
        alignItems: "center",
        height: "450px"
      }}
    >
      

      <form style={{ border: "2px solid white", borderRadius: "10px", }}>
      <div style={{ textAlign: "center" }}>
      <img
            style={{ height: "70px", alignItems: "center" }}
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            alt=""
          /></div>
        <h2 style={{ marginLeft: "8%", color: "#363636", paddingBottom:"20px"}}>
          {" "}
          Create a new account{" "}
        </h2>

        <h4 style={{ color: "#666", marginLeft: "8%", marginRight: "5%" }}>
         
        </h4>

        <Input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            marginBottom: "5%",
            borderRadius: "5px",
            border: "1px solid gray",
            textAlign: "center",
          }}
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={handleusername}
        />
        <br />

        <Input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid gray",
            textAlign: "center",
          }}
          type="text"
          placeholder="Enter Your Email ID"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <Input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid gray",
            marginTop: "20px",
            textAlign: "center",
          }}
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
          <>
            <Link to="/">
              <Button
                style={{
                  marginLeft: "40%",
                  backgroundColor: "purple",
                  color: "White",
                  marginTop: "40px",
                  height: "40px",
                  width: "100px",
                  border: "2px solid purple",
                  borderRadius: "8px",
                }}
              >
                Go to Home
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Input
              type="checkbox"
              style={{ marginTop: "8%", marginLeft: "5%" }}
            />
            <label style={{ fontSize: "10px" }}>
               By proceeding you agree to our Terms of services & privacy policy
            </label>

            <Button
              type="button"
              style={{
                cursor: "pointer",
                marginLeft: "8%",
                height: "45px",
                width: "82%",
                fontSize: "Bolder",
                borderRadius: "5px",
                border: "2px solid black",
                marginTop: "25px",
                color: "black",
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.border = "1px solid #000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.border = "1px solid #000";
              }}
              onClick={handleLogin}
            >
              Create Account
            </Button>
            <br />

            <div
              style={{
                marginLeft: "25%",
                marginTop: "15px",
                color: "black",
                marginBottom: "15px",
              }}
            >
              Already registered?{" "}
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <span style={{ color: "black", fontSize:"15px"}}>Login</span>
              </Link>{" "}
            </div>
          </>
        )}
      </form>
    </Container>
  );
};
export default Register;
