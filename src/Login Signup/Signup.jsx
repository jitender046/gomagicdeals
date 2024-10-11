import React, { useState } from 'react';
import swal from 'sweetalert';
function SignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordToggle = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleSignUp = () => {
    if (validateEmail(email)) {
      if (validatePassword(password)) {
        if (password === confirmPassword) {
          localStorage.setItem("name", name);
          localStorage.setItem("lastName", lastName);
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          swal({
            title: "Wow!",
            text: "Message!",
            type: "success"
        }).then(function() {
            window.location = "https://www.bing.com/";
        });
        } else {
          setError("Passwords do not match!");
        }
      } else {
        setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character!");
      }
    } else {
      setError("Check your email ID!");
    }
  };

  return (
    <div className="App">
      <div className="form">
        <div className="login">Sign Up</div><br /><br />
        First Name: 
        <input type="text" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} /><br /><br />
        Last Name: 
        <input type="text" placeholder="Enter your Last Name" onChange={(e) => setLastName(e.target.value)} /><br /><br />
        Email id: 
        <input type="email" placeholder="Email or Phone number" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        Password: 
        <input type={passwordType} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <i className="fa fa-eye" onClick={handlePasswordToggle} style={{ cursor: "pointer" }}></i><br /><br />
        Confirm Password: 
        <input type={passwordType} placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <i className="fa fa-eye" onClick={handlePasswordToggle} style={{ cursor: "pointer" }}></i><br /><br />

        <button onClick={handleSignUp}>Sign UP</button>&nbsp;&nbsp;
        {error && <p style={{ color: error === "Signup successful!" ? 'green' : 'red' }}>{error}</p>}
        <button className="show-password" onClick={handlePasswordToggle}>
          {passwordType === 'password' ? 'Show' : 'Hide'}
        </button>
      </div>
    </div>
  );
}

export default SignUp;