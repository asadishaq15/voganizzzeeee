import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna Paulson',
      role: 'Designer',
      quote: "Nice work on your amazing software. I could probably go into sales for you. This amazing software did exactly what you said it does. I am so pleased with this product.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oEaXlhH1wqqX2lsVsoPc6-G03UlKe5MtKJwXk7aRhX5DCySfrh4CNLQMybvb8gdW1aU&usqp=CAU"
    },
    {
      name: 'John Smith',
      role: 'Developer',
      quote: "I've been using this software for a few months now, and I have to say I'm impressed. It's made my job so much easier and more efficient. Highly recommended!",
      image: "https://simg.nicepng.com/png/small/792-7926701_speakers-men-png-images-testimonial.png"
    },
    {
      name: 'Emily Johnson',
      role: 'Manager',
      quote: "The support team behind this software is fantastic! Any time I've had an issue or question, they've been quick to respond and extremely helpful. Great product and great service!",
      image: "https://www.tecocraft.com/wp-content/uploads/2018/04/1.jpg"
    }
  ];

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <span className="arrow-icon">&#9664;</span> {/* Unicode left arrow symbol */}
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <span className="arrow-icon">&#9654;</span> {/* Unicode right arrow symbol */}
      </div>
    );
  };
  
  const settings = {
    autoplay: true,
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
              <div className="testimonial-header">
                <img className="testimonial-image" src={testimonial.image} alt={`Image of ${testimonial.name}`} style={{ width: '50px', height: '50px', borderRadius: "50px" }} />
                <div>
                  <div className="name-role">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
  
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} role="img" aria-label="star">⭐</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
