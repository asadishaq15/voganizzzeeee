// src/Register.js
import React from 'react';
import './register.css'; 
import logo from "../../assets/logo-green.webp";
import backgroundImage from "../../assets/Images/loginRegisterSidePhoto.webp"
function Register() {
  return (
    <div className="register">
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
              <button type="submit" className="btn-register">Register</button>
            </div>
          </form>
        </div>
      </div>
          <div className="colored-section" style={{ backgroundImage: `url(${backgroundImage})` }}>

    </div>
    </div>
  );
}

export default Register;
