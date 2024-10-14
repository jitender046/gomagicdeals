import React, { useState } from 'react';
import swal from 'sweetalert';
import { Button, TextField } from '@mui/material';
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
          // localStorage.setItem("lastName", lastName);
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
    <div className="all-content-center">
      <div className="signup">
    <div className="form">
      <p>Welcome to</p>
        <h1> CoffeeBreak ☕</h1>
        <p>We serve coffee from all around the world.<br/>Create a free account and enjoy it!</p>
        <TextField 
        id="standard-basic" 
        label="Enter  Name" 
        InputLabelProps={{style : {color : 'white'} }} 
        variant="standard" 
        onChange={(e) => setName(e.target.value)} 
        />
        <br /><br />
        <TextField
         id="standard-basic"
          label="Enter  Email" 
          InputLabelProps={{style : {color : 'white'} }}
          variant="standard"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br /><br />
        <TextField 
          id="standard-password-input"
          InputLabelProps={{style : {color : 'white'} }} 
          label="Password" 
          type={passwordType} 
          autoComplete="current-password" 
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <TextField
        id="standard-password-input"
        InputLabelProps={{style : {color : 'white'} }} 
        type={passwordType} 
        label="Confirm password" 
        variant="standard" 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <br/>
         <Button style={{ color: 'white' }} variant="text" className="show-password" onClick={handlePasswordToggle}>
          {passwordType === 'password' ? 'Show' : 'Hide'}
        </Button><br/><br/>
        <Button variant="contained" onClick={handleSignUp}>Register</Button>
        {error && <p style={{ color: error === "Signup successful!" ? 'green' : 'red' }}>{error}</p>}
              <br/><br/><br/><br/>
              <p className='already-account'> Already have an account ?</p>
              <Button variant="contained" className='already-account-button'color='secondary' >Log in</Button>

              </div>
              </div>
    </div>
    </div>
  );
}

export default SignUp;