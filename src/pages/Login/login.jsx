// src/Login.js
import React from 'react';
import './login.css';
import logo from "../../assets/logo-green.webp";
import backgroundImage from "../../assets/Images/loginRegisterSidePhoto.webp"

function Login() {
  return (
    <div className="login-container">
    <div className="login">
   
      <div className="plain-section">
        <div className="plain-section-content">
        <h2 className="login-heading">Login</h2>
        <p className="register-text" style={{color:"#94959B", fontSize:"20px"}}>Don't have an account? <span className="green-text">Register</span></p>
        <form>
          <div className="form-container">
        <div className="form-group">
            <label htmlFor="email" style={{color:"#222222"}}>Email<span className="required">*</span></label>
            <input
              style={{backgroundColor:"rgb(227, 227, 227)"}}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{color:"#222222"}}>Password<span className="required">*</span></label>
            <input
              style={{backgroundColor:"rgb(227, 227, 227)"}}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
            />
            <label htmlFor="rememberMe" >Remember Me</label>
            <p style={{color:"#94959B", fontSize:"14px", marginTop:"24px"}}><span className="green-text">Forgot Password?</span></p>
          </div>
          <button type="submit" className="btn-login">Login</button>
          </div>
        </form>
      </div>
      </div>
      <div className="colored-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
  </div>
    </div>
    </div>
  );
}

export default Login;
