import React from 'react';
import styled from 'styled-components';
import HomeCard from '../../Components/HomeCard/homeCard';
import Recipies from "../../assets/Images/Recipies.webp"
import Beauty from "../../assets/Images/Beauty.webp"
import HouseHold from "../../assets/Images/HouseHold.webp"
import Travel from "../../assets/Images/Travel.webp"
import Carousel from '../../Components/Carousel/carousel';
import WhyVoganizzee from '@/Components/whyUs/whyVoganizzee';

const cardData = [
  {
    id: 1,
    title: 'Recipies',
    image: Recipies,
  },
  {
    id: 2,
    title: 'Beauty',
    image: Beauty,
  },
  {
    id: 3,
    title: 'HouseHold',
    image: HouseHold,
  },
  {
    id: 4,
    title: 'Travel',
    image: Travel,
  },
];

const HomePage = () => {
  return (
    <>
   <Carousel/>
    <HomePageContainer>

      <TitleContainer>
        <Title>All the ways we can VeganizZze</Title>
      </TitleContainer>
      <CardContainer>
        {cardData.map(card => (
          <HomeCard key={card.id} title={card.title} image={card.image} />
        ))}
      </CardContainer>
      <WhyVoganizzee/>
    </HomePageContainer>
    </>
  );
};

export default HomePage;

// Styled components
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:40px;
  padding: 0 20px; /* Add some horizontal padding */
`;

const TitleContainer = styled.div`
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid #1B2124; 
  display: inline;

  @media (max-width: 576px) {
    font-size: 1.5rem; 
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr)); 
  gap: 20px;
  justify-items: center;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;