import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CompanyLogo from "../../assets/KarmaLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Import the arrow down icon
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isDropdownOpen, setisDropdownOpen] = useState(false); // State for Services dropdown
  const [isTopHeaderScrolled, setIsTopHeaderScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLink = (link) => {
    setActiveLink(link === activeLink ? null : link);
    setActiveDropdown(null); // Close active dropdown when a link is clicked
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(dropdown === activeDropdown ? null : dropdown);
    setActiveLink(null); // Close active link when a dropdown is clicked
  };

  useEffect(() => {
    // Close navbar when clicked outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  // Function to toggle Services dropdown
  const toggleServicesDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };
  const message = encodeURIComponent("Welcome to DevVerse!");
  return (

    <header className={`site-header ${isNavOpen ? 'open' : ''}`} ref={navRef}>
    <div className="Header-navigations">
      <div className="navigation-container">
        <div className="companyLogo">
          <Link to="/" className="site-logo">
            <img src={CompanyLogo} alt="Logo" />
          </Link>
        </div>
        <div className={`fas fa-bars ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}  ></div>
        <div className="navigation-links" >
          <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <ul className="navigation-links">
              <li><Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => {toggleLink('/'); setIsNavOpen(false)}}>Home <FontAwesomeIcon icon={faAngleDown} /></Link></li>
              <li className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                <Link to="/services" className="dropbtn" onClick={() => toggleDropdown('services')}>Pages <FontAwesomeIcon icon={faAngleDown} /></Link>
  
              </li>
              <li><Link to="/portfolio" className={activeLink === '/portfolio' ? 'active' : ''} onClick={() => {toggleLink('/portfolio'); setIsNavOpen(false)}}>Projects <FontAwesomeIcon icon={faAngleDown} /></Link></li>
              <li><Link to="/testimonials" className={activeLink === '/testimonials' ? 'active' : ''} onClick={() => {toggleLink('/testimonials'); setIsNavOpen(false)}}>Blog <FontAwesomeIcon icon={faAngleDown} /></Link></li>
              <li className={`dropdown ${activeDropdown === 'contact' ? 'active' : ''}`} ref={navRef}>
                <Link to="/contact" className="dropbtn" onClick={() => toggleDropdown('contact')}>Contact <FontAwesomeIcon icon={faAngleDown} /></Link>
               
              </li>
            </ul>
            <Link to="request-quote">
            <button className="Free-trail-button">START A FREE TRAIL</button>
          </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  
  
  );
};

export default Header;
