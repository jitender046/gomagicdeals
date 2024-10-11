import React, { useState } from 'react';
import './Loginsignup.css'

function Login() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignUp = () => {
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("lastName", lastName);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("password", password);
  // };

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail !== email || storedPassword !== password) {
      alert("Your entered data is wrong!");
    } else {
      alert("Login successfully!");
    }
  };

  return (
    <div className="App">
      <div className="form">
        <div className="login">Login</div><br /><br />
       
        Email id: 
        <input type="email" placeholder="Email or Phone number" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        Password: 
        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} /><br /><br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;