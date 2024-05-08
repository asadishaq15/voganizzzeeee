import React from 'react';
import styled from 'styled-components';
import ProductDescriptionAndAddtoCart from '../ProductDescriptionAndAddtoCart/ProductDescriptionAndAddtoCart';

const CardContainer = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  height: auto;

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

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 4px;
`;

const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RatingText = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const ReviewCount = styled.span`
  font-size: 14px;
  color: #888;
  margin-left: 5px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;

  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #71991B;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  transition: background-color 0.3s ease;
  width: auto;

  &:hover {
    background-color: #BB5649;
  }
`;

const StarIcon = styled.span`
  color: #f8d100;
`;

const renderStars = (rating) => {
  const starCount = Math.floor(rating);
  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(<StarIcon key={i}>★</StarIcon>);
  }

  if (rating % 1 !== 0) {
    stars.push(<StarIcon key={starCount}>★</StarIcon>);
  }

  return stars;
};

const ProductCard = ({ image, title, rating, reviewCount, description, descriptionTab, reviews, descriptionImages  }) => {
  return (
    <>
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <div>
          <Title>{title}</Title>
          <Rating>
            {renderStars(rating)}
            <RatingText>{rating}</RatingText>
            <ReviewCount>({reviewCount} reviews)</ReviewCount>
          </Rating>
          <Description>{description}</Description>
        </div>
        <ButtonContainer>
          <Button primary>€9 E-Book</Button>
          <Button>€15 Paper Book</Button>
        </ButtonContainer>
      </ContentContainer>
    </CardContainer>
     <ProductDescriptionAndAddtoCart
     descriptionTab={descriptionTab}
     reviews={reviews}
     descriptionImages={descriptionImages}
   />
   </>
  );
};

export default ProductCard;