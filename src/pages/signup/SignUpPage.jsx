import React, { useState, useEffect, useRef } from "react";
import "./signup.css";

function LoginPage() {
  const [disable, setDisable] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef({ username: username, email: email, address: address, password: password });

  useEffect(() => {
    if (email.length >= 12 && password.length >= 4 && username.length >= 4 && address.length >= 3) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password, username, address]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    setUsername(formRef.current.username.value);
    setEmail(formRef.current.email.value);
    setAddress(formRef.current.address.value);
    setPassword(formRef.current.password.value);
  };
  return (
    <div className="signupWrapper">
      <div className="signupLeft">
        <h1 className="logo">Lamasocial</h1>
        <span className="logoText">
          Connect with friends and the world around you on Lamasocial
        </span>
      </div>
      <div className="signupRight">
        <form className="signupForm" ref={formRef}>
        <input
            type="text"
            name="username"
            onChange={handleChange}
            className="signupFormInput"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="signupFormInput"
            placeholder="Email"
          />
          <input
            type="text"
            name="address"
            onChange={handleChange}
            className="signupFormInput"
            placeholder="Address"
          />
          <input
            name="password"
            type="password"
            className="signupFormInput"
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            className={`btn ${
              disable ? "btnDisabled" : "btnEnabled"
            }`}
            disabled={disable}
            onClick={handleClick}
          >
            Sign Up
          </button>
          <button className={`btn ${
              disable ? "btnDisabled" : "btnEnabled btnLogin"
            }`}
            disabled={disable}
            onClick={handleClick}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
