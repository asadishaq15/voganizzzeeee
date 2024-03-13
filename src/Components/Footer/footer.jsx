import React from 'react';
import './footer.css'; // Import CSS file for styling
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CompanyLogo from "../../assets/KarmaLogo.png"
const Footer = () => {
  return (
    <div className="footer-container-main">
    <div className="footer-container">
      {/* Column 1 */}
      <div className="footer-column">
        <h3>Homepages</h3>
        <ul>
          <li><button>Demos</button></li>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Services</button></li>
          <li><button>Our Works</button></li>
          <li><button>Blog</button></li>
          <li><button>Contact Us</button></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          <li><button>Demos</button></li>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Services</button></li>
          <li><button>Our Works</button></li>
          <li><button>Blog</button></li>
          <li><button>Contact Us</button></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li><button>Demos</button></li>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Services</button></li>
          <li><button>Our Works</button></li>
          <li><button>Blog</button></li>
          <li><button>Contact Us</button></li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li><button>Demos</button></li>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Services</button></li>
          <li><button>Our Works</button></li>
          <li><button>Blog</button></li>
          <li><button>Contact Us</button></li>
        </ul>
      </div>

      {/* Column 5 */}
      <div className="footer-column">
        <h3>Explore</h3>
        <ul>
          <li><button>Demos</button></li>
          <li><button>Home</button></li>
          <li><button>About Us</button></li>
          <li><button>Services</button></li>
          <li><button>Our Works</button></li>
          <li><button>Blog</button></li>
          <li><button>Contact Us</button></li>
        </ul>
      </div>
    </div>
      <div className="footer-bottom-container">
        <div className="footer-logo-container">
          <img src={CompanyLogo} alt="Logo" />
        </div>
        <div className="footer-social-links">
        <FacebookIcon className="social-link" />
        <TwitterIcon className="social-link" />
        <LinkedInIcon className="social-link" />
        <InstagramIcon className="social-link" />
         </div>
      </div>
    </div>
  );
};

export default Footer;
