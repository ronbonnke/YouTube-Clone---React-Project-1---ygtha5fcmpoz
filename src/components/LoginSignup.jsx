import { CloseIcon } from "@chakra-ui/icons";
import { Button, Center, Container } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, NavLink, useLocation, json } from "react-router-dom";
import axios from "../API/axios";



const Login = () => {
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
          // const response = await fetch (
          //   "https://academics.newtonschool.co/api/v1/user/login",
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //       projectId: "f104bi07c490",
          //     },
          //     body: JSON.stringify({
          //       email: `${email}`,
          //       password: `${password}`,
          //       appType: "ott",
          //     }),
          //   }
          // );

const response = await axios.post("/user/login", {
  email: email,
  password: password,
  appType: "ott",
})
      


const data = response.data
          // const data = await response.json();
          
          console.log(response);

          console.log('data',data);

          if ( data.status === "success") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.data));
            console.log("registration successfully");
            setError("Login successfully");
            setColor("green");
            setLogin(true);
            // setUserName(email);
            // setLoggedInStatus(true);
            

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
      
        width: "30%",
        marginLeft: "38%",
        justifyContent:"center",
        marginTop: "100px",
        borderRadius: "5px",
        height: "390px",
      border: "2px solid black"
      }}
    >

      <NavLink to="/">
        <CloseIcon
          style={{
            color: "black",
            borderRadius: "8%",
            marginLeft: "95%",
            height: "20px",
            width: "23px",
            padding:"2px",
            backgroundColor:"red",
            objectFit:"contain",
          }}
        />
      </NavLink>
      
      <form style={{ border: "2px solid white", borderRadius: "10px"}}>
        <h2 style={{textAlign: "center",fontSize:"30px",paddingBottom: "20px",paddingLeft:"0px"}}>Login</h2>

        <h4 style={{ color: "#666", marginLeft: "8%", marginRight: "5%" }}>
        
        </h4>

        <input
          style={{
            marginLeft: "8%",
            height: "40px",
            width: "80%",
            borderRadius: "5px",
            border: "2px solid black",
            textAlign: "center",
            marginTop: "0px",
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
            border: "2px solid black",
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
          <>
            <Link to="/">
              <Button
                style={{
                  marginLeft: "40%",
                  backgroundColor: "black",
                  color: "White",
                  marginTop: "40px",
                  height: "40px",
                  width: "80px",
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
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.border = "2px solid #000";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.border = "2px solid #000";
              }}
              onClick={handleLogin}
            >
              LOGIN
            </Button>
            <br />
            <div className="buttons" style={{display:"flex", justifyContent: "space-between" ,}}>
            <Link to="/Register" style={{ textDecoration: "none" }}>
              <div
                style={{ marginLeft: "36px", marginTop: "35px", color: "black"}}
              >
              <span style={{ color: "#000" , }}><button style={{backgroundColor:"lightgrey", borderRadius:"5px",height:"35px", width: "170px",  cursor:"pointer" }}>Register now</button></span>
              </div>
            </Link>

            <Link to="/password" style={{ textDecoration: "none" }}>
            <div
               style={{marginRight:"55px", marginTop:"35px"}}
              >
              <span style={{ color: "#000" , }}><button style={{backgroundColor:"lightgrey", borderRadius:"5px",height:"35px", width: "180px",cursor:"pointer"}}>Forgot password</button></span>
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
