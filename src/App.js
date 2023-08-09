import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/login/Login2";
import SignUpPage from "./pages/signup/SignUpPage";

function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <LoginPage />
    //   <SignUpPage />
    //   <Profile />
    // </div>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
