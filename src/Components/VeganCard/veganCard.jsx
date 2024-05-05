import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  height: 400px;
  width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 40%;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover entire container */
  border-radius: 4px;
`;

const ContentContainer = styled.div`
  flex: 2;
  max-width: 60%;
  max-height: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BulletItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    margin-right: 5px;
    font-size: 18px;
  }
`;

const VeganCard = ({ image, title, bullets }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt="Card Image" />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <BulletList>
          {bullets.map((bullet, index) => (
            <BulletItem key={index}>{bullet}</BulletItem>
          ))}
        </BulletList>
      </ContentContainer>
    </CardContainer>
  );
};

export default VeganCard;