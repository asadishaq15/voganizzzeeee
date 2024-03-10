import React from 'react';
import './toolCategories.css'; // Import CSS file for styling
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";

const ToolCategories = () => {
  return (
    <div className="tool-container">
      <h2>Tool for every kind of business</h2>
      <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>

      <div className="card-container">
        {/* First Card */}
        <div className="card">
          <img src={Card1} alt="Font Library" />
          <h3>Huge font library</h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus quod.</p>
        </div>

        {/* Second Card */}
        <div className="card">
          <img src={Card2} alt="Documented" />
          <h3>Easy documented</h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus quod.</p>
        </div>

        {/* Third Card */}
        <div className="card">
          <img src={Card3} alt="Customizable" />
          <h3>Fully customizable</h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus quod.</p>
        </div>
      </div>

      <button className="learn-more-button" style={{marginTop:"50px"}}>LEARN MORE</button>
    </div>
  );
};

export default ToolCategories;
