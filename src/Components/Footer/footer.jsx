import React from 'react';
import './footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
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
  );
};

export default Footer;
