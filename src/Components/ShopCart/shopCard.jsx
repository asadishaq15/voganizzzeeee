import React, { useState } from 'react';
import styled from 'styled-components';
import ProductDescriptionTabs from '../ProductDetailsTab/productDetailsTab';
import PaymentOverlay from '../PaymentOverlay/paymentOverlay';

const CardContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  height: auto; // Change height to auto

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px; // Add a maximum width

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
    max-width: 100%; // Reset max-width for smaller screens
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto; // Change height to auto
  max-height: 300px; // Add a maximum height
  object-fit: contain; // Change object-fit
  border-radius: 4px;
`;

const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Add space-between to align content vertically
  padding: 20px; // Add padding
  background-color: #fff; // Add background color
  border-radius: 8px; // Add border-radius
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Add box-shadow
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
 
`;

const RatingText = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right:10px;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #888;
  margin-left: 5px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  background-color: #71991B;
  color: #fff;
  border: none;
  max-width: 150px; 
  border-radius: 8px; /* Adjust border-radius */
  padding: 10px 20px; 
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: auto; /* Adjust width automatically based on content */


    &:hover {
        background-color: #BB5649;
      }
  }
`;


const StarIcon = styled.span`
  color: #f8d100; /* Yellow color for stars */
`;
const renderStars = (rating) => {
    const starCount = Math.floor(rating); // Get integer part of rating
    const stars = [];
  
    for (let i = 0; i < starCount; i++) {
      stars.push(<StarIcon key={i}>★</StarIcon>); // Render filled star
    }
  
    // Render half star if rating has a decimal part
    if (rating % 1 !== 0) {
      stars.push(<StarIcon key={starCount}>★</StarIcon>); // Render half star
    }
  
    return stars;
  };

  const ShopCard = ({ image, title, rating, reviewCount, description, descriptionTab, reviews, descriptionImages }) => {
    const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);
  
    const handleAddToCart = () => {
      setShowPaymentOverlay(true);
    };
  
    const handleCloseOverlay = () => {
      setShowPaymentOverlay(false);
    };
  
    return (
      <>
        <CardContainer>
          <ImageContainer>
            <Image src={image} alt={title} />
          </ImageContainer>
          <ContentContainer>
            <Title>{title}</Title>
            <Rating>
              {/* Render stars */}
              {renderStars(rating)}
              <RatingText>{rating}</RatingText>
              <ReviewCount>({reviewCount} reviews)</ReviewCount>
            </Rating>
            <Description>{description}</Description>
            <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
          </ContentContainer>
        </CardContainer>
        <ProductDescriptionTabs
          descriptionTab={descriptionTab}
          reviews={reviews}
          descriptionImages={descriptionImages}
        />
        {showPaymentOverlay && (
          <PaymentOverlay
            onClose={handleCloseOverlay}
            product={{
              image,
              title,
              price: 19.99, 
            }}
          />
        )}
      </>
    );
  };
  
  export default ShopCard;