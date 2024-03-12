import React from 'react';
import './improveBusiness.css'; // Import CSS file for styling
import rightImage from "../../assets/rightImage.png"
import LeftImage from "../../assets/LeftImage.png"

const ImproveContainers = () => {
  return (
    <div className="main-container">
      {/* Left Container */}
      <div className="left-container">
        <img src={LeftImage} alt="Left Image" />
      </div>

      <div className="middle-container">
        <h1 className="heading">Improve your business and make your work easy and pleasent</h1>
        <div className="buttons">
          <button className="try-for-free-button">TRY FOR FREE</button>
          <button className="button-2">REQUEST A DEMO</button>
        </div>
      </div>

      {/* Right Container */}
      <div className="right-container">
        <img src={rightImage} alt="Right Image" />
      </div>

    </div>
  );
};

export default ImproveContainers;
