// src/Login.js
import React from 'react';
import './login.css';
import logo from "../../assets/voganizzzeLogo.webp";

function Login() {
  return (
    <div className="login">
      <div className="colored-section">
        <img src={logo} alt="Logo" className="logo" />
        <p className="quotation">″</p>
        <div className="text-center">
          <div className="login-page-title">
            <h2 className='h1-login'>Welcome</h2>
            <h2 className='h2-login'>Back!</h2>
          </div>
          <p style={{fontSize:"22px", fontWeight:"200"}}>Please login to access your account securely.</p>
        </div>
      </div>
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
          <button type="submit">Login</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
