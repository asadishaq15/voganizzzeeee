import React from 'react';
import './portableSoftware.css'; // Import CSS file for styling
import AmazingSoftware from "../../assets/amazingSoftware.png"; // Import image asset

const PortableSoftware = () => {
  return (
    <div className="seo-container">
      <div className="seo-content">
        {/* First sub-container for image */}
        <div className="seo-image-container">
          <img src={AmazingSoftware} alt="SEO Image" />
        </div>
        <div className="seo-text-container">
          <h2>Amazing software that fits for every kind of business and for every person</h2>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.
          </p>
          <button className="learn-more-button">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default PortableSoftware;
