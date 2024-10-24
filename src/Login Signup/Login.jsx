import React, { useState } from "react";
import { TextField } from "@mui/material";
import swal from "sweetalert";
import "./Loginsignup.css";
import appIcon from "../Images/icons/appIcon.svg";
import Header from "../Header Footer/Header.js";
import Footer from "../Header Footer/Footer.jsx";

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
              <img src={appIcon} alt="App Logo" className="app-logo" />{" "}
              <h1>Sign In</h1>
              <p class="text-warning">Access to your account</p>
              <br />
              <br />
              <TextField
                className="input-filed"
                id="standard-basic"
                label="Email or Phone"
                InputLabelProps={{ style: { color: "black" } }}
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                className="input-filed"
                id="standard-password-input"
                label="Password"
                InputLabelProps={{ style: { color: "black" } }}
                autoComplete="current-password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="rememberMe">
                <input
                  type="checkbox"
                  name=""
                  id="Checkbox"
                  className="checkbox"
                />
                <label for="">Remember Me</label>
              </div>
              <br />
              <button
                className="signin-btn"
                onClick={handleLogin}
                id="Submit-btn"
                disabled
              >
                Sign In
              </button>
              <br />
              <br />
              <a href="/" className="forget-password">
                Forgot Password?
              </a>
              <br />
              <div class="signInWith">
                <span></span>
                <p>or sign in with</p>
                <span></span>
              </div>
              <div class="signIn-tools">
                <img src={require("../Images/icons/google.png")} alt="google" />
                <img
                  src={require("../Images/icons/twitter.png")}
                  alt="twittter"
                />
                <img
                  src={require("../Images/icons/facebook.png")}
                  alt="facebook"
                />
              </div>
              <br />
              <p className="already-account">
                Don't have an account ? <a href="./signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
