import React from 'react'
import headingBackground from "../../assets/Images/menu-bg.webp"
import styled from 'styled-components';
import ShopCard from '@/Components/ShopCart/shopCard';
import ShopCardData from '@/Components/ShopCart/CardData';
import SunshineIcon from "../../assets/SunShineWhite.webp";
import PaymentMethodsAccepted from '@/Components/PaymentMethods/paymentMethods';


const Title = styled.h2`
  font-size: 48px;
  font-family: 'Playfair Display', serif;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 22px;
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
const VoganizzzeShop = () => {
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
          Welcome to the VeganizZze shop!
        </Title>
      </div>
      <CardContainer>
      {ShopCardData.map((card, index) => (
        <ShopCard
            key={index}
            image={card.image}
            title={card.title}
            rating={card.rating}
            reviewCount={card.reviewCount}
            description={card.description}
            descriptionTab={card.descriptionTab}
            reviews={card.reviews} // Add this line
            descriptionImages={card.descriptionImages} 
        />
        ))}
      </CardContainer>
      <PaymentMethodsAccepted/>
    </div>
  );
}

export default VoganizzzeShop;