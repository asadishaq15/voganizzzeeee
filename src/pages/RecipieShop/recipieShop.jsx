import React from 'react'
import headingBackground from "../../assets/Images/menu-bg.webp"
import styled from 'styled-components';
import ProductCard from '@/Components/ProductCard/productCard';
import ProductCardData from '@/Components/ProductCard/productCardData';
import ProductDescriptionAndAddtoCart from '@/Components/ProductDescriptionAndAddtoCart/ProductDescriptionAndAddtoCart';


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

const RecipieShop = () => {
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
          padding: '5%',
          color: 'white',
        }}
      >
        <Title>Welcome to the VeganizZze shop!</Title>
      </div>
      <CardContainer>
      {ProductCardData.map((card, index) => (
        <ProductCard
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
    </div>
  );
}

export default RecipieShop;