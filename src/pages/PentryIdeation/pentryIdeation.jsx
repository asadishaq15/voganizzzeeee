import React from 'react'
import headingBackground from "../../assets/Images/menu-bg.webp"
import styled from 'styled-components';
import VeganCard from '@/Components/VeganCard/veganCard';
import cardData from '@/Components/VeganCard/cardData';
import SunshineIcon from "../../assets/SunShineWhite.webp";
const Title = styled.h2`
  font-size: 48px;
  font-family: 'Playfair Display', serif;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
`;
const IconImage = styled.img`
  width: 50px; 
  height: 50px; 
  margin-right: 2px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: -2px;
    margin-bottom: 35px; 
  }
`;


const PentryIdeation = () => {
   
      return (
        <div>
          <div
            className="blogs-heading-container"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              padding: '3%',
              color: 'white',
            }}
          >
        
            <Title>
          <IconImage src={SunshineIcon} alt="Sunshine Icon" /> {/* Sunshine icon */}
          Veganized Pastry
        </Title>
          </div>
          <CardContainer>
            {cardData.map((card, index) => (
              <VeganCard
                key={index}
                image={card.image}
                title={card.title}
                bullets={card.bullets}
              />
            ))}
          </CardContainer>
        </div>
      );
}

export default PentryIdeation
