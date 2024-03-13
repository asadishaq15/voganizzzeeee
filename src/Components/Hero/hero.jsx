import React from 'react';
import './hero.css'; // Import CSS file for styling
import heroImg from "../../assets/HeroImg.png"
const Hero = () => {
  return (
    <div className="container">
      {/* Content container */}
      <div className="content">
        <h2>Make your software better. Grow your business</h2>
        <p>Pair this understanding of the individual experience with powerful quantitative insights to inform you.</p>
        <div className="buttons">
          <button className='try-free'>TRY FOR FREE</button>
          <button className='req-quote'>REQUEST A DEMO</button>
        </div>
      
      </div>
      {/* Image container */}
      <div className="image">
        <img src={heroImg} alt="Image" />
      </div>
    </div>
  );
};

export default Hero;
