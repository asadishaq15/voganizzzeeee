import React from 'react';
import './categories.css'; // Import CSS file for styling
import icon1 from "../../assets/1.png"
import icon2 from "../../assets/2.png"
import icon3 from "../../assets/3.png"
import icon4 from "../../assets/4.png"
import icon5 from "../../assets/5.png"
import icon6 from "../../assets/6.png"
const Categories = () => {
  return (
    <div className="boxes-wrapper">
    <div className="boxes-container">
      {/* Row 1 */}
      <div className="box">
        <div className="box-content">
          <img src={icon1} alt="Design Icon" />
          <h3>Design & Creative</h3>
        </div>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
      </div>
      <div className="box">
        <div className="box-content">
          <img src={icon2} alt="Development Icon" />
          <h3>Development</h3>
        </div>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
      </div>
      <div className="box">
        <div className="box-content">
          <img src={icon3} alt="Writing Icon" />
          <h3>Writing</h3>
        </div>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
      </div>

      {/* Row 2 */}
      <div className="box">
        <div className="box-content">
          <img src={icon4} alt="Customer Service Icon" />
          <h3>Customer Service</h3>
        </div>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
      </div>
      <div className="box">
        <div className="box-content">
          <img src={icon5} alt="Sales & Marketing Icon" />
          <h3>Sales & Marketing</h3>
        </div>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
      </div>
      <div className="box">
        <div className="box-content">
          <img src={icon6} alt="Data Analytics Icon" />
          <h3>Data Analytics</h3>
        </div>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>
      </div>
    </div>
  </div>
  );
};

export default Categories;
