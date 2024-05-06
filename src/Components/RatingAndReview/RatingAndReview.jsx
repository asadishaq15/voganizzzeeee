import React from 'react';
import styled from 'styled-components';
import ProductDescriptionTabs from '../ProductDetailsTab/productDetailsTab';

const CardContainer = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 8px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  height: auto;
  overflow: auto; // Add this line

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
  max-width: 300px;
  max-height: 100%; // Add this line
  overflow: hidden; // Add this line

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
    max-width: 100%;
    max-height: none; // Add this line
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%; // Change this line
  object-fit: contain; // Change this line
  border-radius: 4px;
`;
const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  flex-shrink: 0;
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

  const RatingAndReview = ({ image, title, rating, reviewCount, description , descriptionTab,  reviews, descriptionImages }) => {
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
          <ProductDescriptionTabs descriptionTab={descriptionTab}
           reviews={reviews}
           />
        </ContentContainer>
      </CardContainer>
        
          
      </>
    );
  };
  
  export default RatingAndReview;