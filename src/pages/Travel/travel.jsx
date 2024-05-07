import React from 'react';
import styled from 'styled-components';
import headingBackground from '../../assets/Images/BeautyPageBg.webp';
import Destination1 from '../../assets/Images/Destination1.webp';
import Destination2 from '../../assets/Images/Destination2.webp';
import Destination3 from '../../assets/Images/Destination3.webp';
import { Link } from 'react-router-dom';

const Title = styled.h2`
  font-size: 48px;
  font-family: 'Playfair Display', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 1rem;
  padding: 0 1rem;
  margin-top: 80px;

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  button {
    display: none; /* Hide the button on smaller screens */
    color: #0f3460;
    border: 1px solid #0f3460;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: auto;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }

  @media (min-width: 768px) {
    button {
      display: block; /* Display the button on larger screens */
    }
  }
`;


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 0 1rem;
`;

const CardWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95); 
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
`;

const data = [
  {
    image: Destination1,
    title: 'Dublin',
    route: '/travelcards' 
  },
  {
    image: Destination2,
    title: 'Maldives',
    route: '/travelcards' 
  },
  {
    image: Destination3,
    title: 'Australia',
    route: '/travelcards' 
  },
  // Add more data objects as needed
];

const Travel = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',

          padding: '5%',
        }}
      >
        <Title>Travel</Title>
      </div>
      <SectionHeading>
        <h3>Recommended Destinations </h3>
        <button>View All</button>
      </SectionHeading>
      <CardContainer>
        {data.map((item, index) => (
          <Link to={item.route} key={index}> {/* Wrap each card with Link component */}
            <CardWrapper>
              <ImageContainer>
                <img src={item.image} alt={item.title} />
              </ImageContainer>
              <CardTitle>{item.title}</CardTitle>
            </CardWrapper>
          </Link>
        ))}
      </CardContainer>
    </div>
  );
};

export default Travel;
