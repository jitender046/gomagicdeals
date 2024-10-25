import React, { useState } from "react";
import swal from "sweetalert";
import { Button, TextField } from "@mui/material";
import appIcon from "../Images/icons/appIcon.svg";
import Header from "../Header Footer/Header.js";
import Footer from "../Header Footer/Footer.jsx";
function SignUp() {
  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordType, setPasswordType] = useState("password");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSignUp = () => {
    if (validateEmail(email)) {
      if (validatePassword(password)) {
        if (password === confirmPassword) {
          localStorage.setItem("name", name);
          // localStorage.setItem("lastName", lastName);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          swal({
            title: "Wow!",
            text: "Sign up successfully!",
            type: "success",
          }).then(function () {
            window.location = "./login";
          });
        } else {
          setError("Passwords do not match!");
        }
      } else {
        setError(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character!"
        );
      }
    } else {
      setError("Check your email ID!");
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        <div className="all-content-center">
          <div className="signup">
            <div className="form">
              <img src={appIcon} alt="app-logo" className="app-logo" />
              <h1>Sign Up</h1>
              <p class="text-warning">Register New Account</p>
              <TextField
                className="input-filed"
                id="standard-basic"
                label="Enter  Name"
                InputLabelProps={{ style: { color: "black" } }}
                variant="standard"
                onChange={(e) => setName(e.target.value)}
              />
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
                InputLabelProps={{ style: { color: "black" } }}
                label="Password"
                type={passwordType}
                autoComplete="current-password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <TextField
                className="input-filed"
                id="standard-password-input"
                InputLabelProps={{ style: { color: "black" } }}
                type={passwordType}
                label="Confirm password"
                variant="standard"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br />
              <Button
                style={{ color: "black" }}
                variant="text"
                className="show-password"
                onClick={handlePasswordToggle}
              >
                {passwordType === "password" ? "Show" : "Hide"}
              </Button>
              <br />
              <div className="rememberMe">
                <input
                  type="checkbox"
                  name=""
                  id="Checkbox"
                  className="checkbox"
                />
                <label for="Checkbox">
                  I agree with <a href="/terms">Terms Of Services</a> and
                  <a href="/privacy"> Privacy Policy</a>
                </label>
              </div>
              <br />
              <button
                className="signin-btn"
                onClick={handleSignUp}
                id="Submit-btn"
                
              >
                Sign Up
              </button>
              <br />
              <p className="any-problem">
               Do you have any problem? <a href="/contact">Help</a>
              </p>

              {error && (
                <p
                  style={{
                    color: error === "Signup successful!" ? "green" : "red",
                  }}
                >
                  {error}
                </p>
              )}
              <br />
              <br />
              <p className="already-account">
                Already have an account ?<a href="/login">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
