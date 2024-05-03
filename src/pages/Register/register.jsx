// src/Register.js
import React from 'react';
import './register.css'; 
import logo from "../../assets/voganizzzeLogo.webp";

function Register() {
  return (
    <div className="register">
      <div className="colored-section">
        <img src={logo} alt="Logo" className="logo" />
        <p className="quotation">″</p>
        <div className="text-center">
          <div className="register-page-title">
            <h2 className='h1-register'>Welcome to</h2>
            <h2 className='h2-register'>the VEGANIzZzE</h2>
          </div>
          <p style={{fontSize:"22px", fontWeight:"200"}}>Please register to create new account.</p>
        </div>
      </div>
      <div className="plain-section">
        <div className="plain-section-content">
          <h2 className="register-heading">Register</h2>
          <p className="register-text" style={{color:"#94959B", fontSize:"20px"}}>Already have an account? <span className="green-text">Register</span></p>
          <form>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="fullname" style={{color:"#222222"}}>Full Name<span className="required">*</span></label>
                <input
                  style={{backgroundColor:"rgb(227, 227, 227)"}}
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  required
                />
              </div>
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
                <label htmlFor="confirmPassword" style={{color:"#222222"}}>Confirm Password<span className="required">*</span></label>
                <input
                  style={{backgroundColor:"rgb(227, 227, 227)"}}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  required
                />
                <label htmlFor="agreeTerms" style={{color:"#222222"}}>I agree to the terms and conditions of Voganizzze</label>
              </div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
