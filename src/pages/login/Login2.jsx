import React, { useState, useEffect, useRef } from "react";
import "./login.css";

function LoginPage() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef({email: email, password: password});

  useEffect(() => {
   if(email.length >= 12 &&  password.length >= 4) {
    setDisable(false);
   } else {
    setDisable(true);
   }
  }, [email, password]);

  const handleClick = (e) => {
    e.preventDefault()
    alert("submitted");
  };

  const handleChange = (e) => {
    setEmail(formRef.current.email.value)
    setPassword(formRef.current.password.value)
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
        <form className="loginForm" ref={formRef}>
          <input type="email" name="email" onChange={handleChange} className="loginFormInput" placeholder="Email" />
          <input
            name="password"
            type="password"
            className="loginFormInput"
            placeholder="Password"
          onChange={handleChange}/>
          <button className={`loginBtn ${disable ? "loginBtnDisabled" : "loginBtnEnabled"}`} disabled={disable} onClick={handleClick}>
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
