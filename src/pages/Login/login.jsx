import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/newLogo.webp";
import backgroundImage from "../../assets/Images/loginRegisterSidePhoto.webp";

function Login() {
  return (
    <div className="login-container">
      <div className="login">
        <div className="plain-section">
          <div className="plain-section-content">
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="login-heading">Login</h2>
            <p className="register-text" style={{color:"#94959B", fontSize:"20px"}}>Don't have an account?<Link to="/register"><span className="green-text">Register</span></Link></p>
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
                <Link to="/">
                  <button type="submit" className="btn-login">Login</button>
                </Link>
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
