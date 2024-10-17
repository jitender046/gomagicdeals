import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import swal from "sweetalert";
import "./Loginsignup.css";
import Header from '../Header Footer/Header.js';
import Footer from '../Header Footer/Footer.jsx';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail !== email || storedPassword !== password) {
      swal({
        title: "Try again!",
        text: "Please check Email or Password!",
        icon: "error",
        type: "success",
      });
    } else {
      swal({
        title: "Good job!",
        text: " Login successfully !",
        icon: "success",
        button: {
          text: "Ok",
          className: "sweetalert-pop-button",
        },
      });
    }
  };

  return (
    <>
    <Header />
    <div className="App">
      <div className="all-content-center">
        <div className="login">
          <div className="form">
            <p>Welcome to</p>
            <h1> CoffeeBreak ☕</h1>
            <p>
              We serve coffee from all around the world.
              <br />
              Login your account and enjoy it!
            </p>
            <br />
            <br />
            {/* Email id:  */}
            <TextField
              id="standard-basic"
              label="Enter  Email"
              InputLabelProps={{ style: { color: "white" } }}
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <TextField
              id="standard-password-input"
              label="Password"
              InputLabelProps={{ style: { color: "white" } }}
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <br />
            <br />
            <br />
            <br />
            <p className="already-account"> If don't have an account ?</p>
            <Button
              variant="contained"
              className="already-account-button"
              color="secondary"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
