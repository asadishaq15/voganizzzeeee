import React from 'react';
import './diverseTool.css'; // Import CSS file for styling

// Import images
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const DiverseTool = () => {
  return (
    <div className="component-container">
      <h1 className="heading">Software help for every tool you use</h1>
      <p className="description">
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
      </p>

      <div className="features-container">
        <div className="images-container">
          <div className="image-container">
            <img src={image1} alt="Image 1" className="image1" />
            <img src={image2} alt="Image 2" className="image2" />
            <img src={image3} alt="Image 3" className="image3" />
            {/* Add more images as needed */}
          </div>
        </div>

        <div className="text-container">
        <div className="feature">
        <h5><span className="arrow">&#8594;</span> Ready-to-use templates</h5>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
        </div>
        <div className="feature">
        <h5><span className="arrow">&#8594;</span> Custom advertisement</h5>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
        </div>
        <div className="feature">
        <h5><span className="arrow">&#8594;</span> Best performance</h5>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
        </div>
        <div className="feature">
        <h5><span className="arrow">&#8594;</span> Statistic reports</h5>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
        </div>
        <button className="action-button">LEARN MORE</button>

        </div>
      </div>
    </div>
  );
};

export default DiverseTool;
