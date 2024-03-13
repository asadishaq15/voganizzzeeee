import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './testimonials.css'; // Import CSS file for styling

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna Paulson',
      role: 'Designer',
      quote: "Nice work on your amazing software. I could probably go into sales for you. This amazing software did exactly what you said it does. I am so pleased with this product."
    },
    {
      name: 'John Smith',
      role: 'Developer',
      quote: "I've been using this software for a few months now, and I have to say I'm impressed. It's made my job so much easier and more efficient. Highly recommended!"
    },
    {
      name: 'Emily Johnson',
      role: 'Manager',
      quote: "The support team behind this software is fantastic! Any time I've had an issue or question, they've been quick to respond and extremely helpful. Great product and great service!"
    }
    // Add more testimonials as needed
  ];
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        Previous
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        Next
      </div>
    );
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Over 300,000 people trusted us</h2>
      <p className="description">
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
      </p>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="slide">
            <div className="testimonial">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
