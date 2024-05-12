import React from 'react';
import styled from 'styled-components';
import favIcon from '../../assets/Images/favouriteIcon.webp'; // Import the favorite icon image

const MenuCard = ({ image, title }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={image} alt="Card" />
        <FavIconWrapper>
          <FavIcon src={favIcon} alt="Favorite Icon" />
        </FavIconWrapper>
      </ImageWrapper>
      <Title>{title}</Title>
    </CardWrapper>
  );
};

export default MenuCard;

const CardWrapper = styled.div`
  width: 270px;
  margin-bottom: 20px;
  padding:8px 4px;
  border: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #b8ea9b;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 20px auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FavIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const FavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
`;