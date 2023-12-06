import { CloseIcon } from "@chakra-ui/icons";
import { Button, Center, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Link, NavLink, useLocation, json } from "react-router-dom";
import axios from "../API/axios";

const Login = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("");
  const [login, setLogin] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("All Field must be filled");
      setColor("red");
    } else if (!email.includes("@")) {
      setError("Email is invalid");
      setColor("red");
    } else {
      try {
        (async function () {
          const response = await axios.post("/user/login", {
            email: email,
            password: password,
            appType: "ott",
          });

          const data = response.data;

          console.log(response);

          console.log("data", data);

          if (data.status === "success") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.data));
            console.log("registration successfully");
            setError("Login successfully");
            setColor("green");
            setLogin(true);
            navigate("/");
          } else {
            console.error("Registration Failed");
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
        width: "33%",
        height: "70%",
        left: "50%",
        paddingTop: "30px",
        top: "50%", 
        position: "absolute",
        borderRadius: "2%",
        border: "1.6px solid lightgrey",
        textAlign: "center",
        transform: "translate(-50%, -50%)", 
      }}
    >
      <form style={{ border: "2px solid white", borderRadius: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "70px", alignItems: "center" }}
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            alt=""
          />
        </div>
        <h2 style={{ color: "#363636", paddingBottom:"20px", textAlign:"center", fontSize:"25px"}}>
          {" "}
          Login{" "}
        </h2>

        <h4 style={{ color: "#666", marginLeft: "8%", marginRight: "5%" }}></h4>

        <input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "1.6px solid lightgrey",
            textAlign: "center",
            marginTop: "0px",
            justifyContent: "center",
          }}
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "1.6px solid lightgrey",
            marginTop: "20px",
            textAlign: "center",
          }}
          type="password"
          placeholder="Password"
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
        {login ? (
          <></>
        ) : (
          <>
            <Button
              type="button"
              style={{
                cursor: "pointer",
                marginLeft: "8%",
                height: "50px",
                width: "80%",
                fontSize: "Bolder",
                borderRadius: "5px",
                border: "1px solid black",
                marginTop: "25px",
                color: "black",
                background: "#318CE7",
                color:"white",
                fontWeight:"bolder",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#318CE7";
                e.target.style.border = "2px solid #318CE7";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#318CE7";
                e.target.style.border = "2px solid #318CE7";
              }}
              onClick={handleLogin}
            >
              LOGIN
            </Button>
            <br />
            <div
              className="buttons"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/Register" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    marginLeft: "36px",
                    marginTop: "35px",
                    
                  }}
                >
                  <span >
                    <button
                      style={{
                        fontSize:"14px",
                        borderRadius: "5px",
                        height: "35px",
                        color:"#318CE7",
                        width: "120px",
                        cursor: "pointer",
                        border:"none",
                        fontWeight: "bolder"
                      }}
                    >
                      create account
                    </button>
                  </span>
                </div>
              </Link>

              <Link to="/password" style={{ textDecoration: "none" }}>
                <div style={{ marginRight: "50px", marginTop: "35px" }}>
                  <span>
                    <button
                      style={{
                        backgroundColor: "#318CE7",
                        borderRadius: "5px",
                        color: "white",
                        height: "35px",
                        width: "150px",
                        cursor: "pointer",
                        border:"none",
                        fontWeight:"bolder"
                      }}
                    >
                      Forgot password
                    </button>
                  </span>
                </div>
              </Link>
            </div>
          </>
        )}
      </form>
    </Container>
  );
};
export default Login;
