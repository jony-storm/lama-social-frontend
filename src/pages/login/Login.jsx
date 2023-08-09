import React, { useState, useEffect } from "react";
import "./login.css";

function LoginPage() {
    const [formData, setFormData] = useState(Object.freeze({
        email: "",
        password: ""
      }))
  const [disable, setDisable] = useState(true);

  useEffect(() => {
   if(formData.email.length > 3 && formData.password.length > 3) {
    setDisable(false)
    console.log("enabled")
   
   }
  }, [formData]);

  const handleClick = () => {
    console.log("clicked")
  }
  const handleChange = (e) => {
    console.log("change working")
    setFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    console.log(formData)
  }
  return (
    <div className="loginWrapper">
      <div className="loginLeft">
        <h1 className="logo">Lamasocial</h1>
        <span className="logoText">
          Connect with friends and the worrld around you on Lamasocial
        </span>
      </div>
      <div className="loginRight">
        <form className="loginForm">
          <input onChange={handleChange} type="email" name="email" className="loginFormInput" placeholder="Email" />
          <input onChange={handleChange}
            name="password"
            type="password"
            className="loginFormInput"
            placeholder="Password"
          />
          <button disabled>disabled</button>
          <button disabled={disable} className="loginBtn" onClick={handleClick}>
            Log In
          </button>
          <div className="loginFormBottom">
            <span className="forgotPassword">Forgot password?</span>
            <button className="createAccount">Create a New Account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
