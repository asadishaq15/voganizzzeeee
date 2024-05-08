import React from 'react';
import styled from 'styled-components';

const HomeCard = ({ image, title }) => {
  return (
    <CardWrapper>
      <Image src={image} alt="Card" />
      <Title>{title}</Title>
    </CardWrapper>
  );
};

export default HomeCard;

const CardWrapper = styled.div`
  width: 270px;
  margin-bottom:20px;
  border: 2px solid #ccc; 
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #B8EA9B; 
  }

  @media (max-width: 768px) {
    max-width: 100%; 
    margin: 20px auto; 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
  padding: 10px 0;
`;
