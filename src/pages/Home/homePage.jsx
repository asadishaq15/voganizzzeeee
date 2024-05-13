import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeCard from '../../Components/HomeCard/homeCard';
import Recipies from "../../assets/Images/Recipies.webp";
import SunshineIcon from "../../assets/sunShineIcon.webp";
import Beauty from "../../assets/Images/Beauty.webp";
import HouseHold from "../../assets/Images/HouseHold.webp";
import Travel from "../../assets/Images/Travel.webp";
import Carousel from '../../Components/Carousel/carousel';
import WhyVoganizzee from '@/Components/whyUs/whyVoganizzee';

const cardData = [
  {
    id: 1,
    title: 'Recipies',
    image: Recipies,
    route: '/menu' 
  },
  {
    id: 2,
    title: 'Beauty',
    image: Beauty,
    route: '/beauty' 
  },
  {
    id: 3,
    title: 'HouseHold',
    image: HouseHold,
    route: '/household' 
  },
  {
    id: 4,
    title: 'Travel',
    image: Travel,
    route: '/travel' 
  },
];

const HomePage = () => {
  return (
    <>
      <Carousel/>
      <HomePageContainer>

      <TitleContainer>
      <IconImage src={SunshineIcon} alt="Custom Icon" /> 
      <Title>All the ways we can VeganizZze</Title>
    </TitleContainer>
        <CardContainer>
          
          {cardData.map(card => (
            <Link to={card.route} key={card.id}>
              <HomeCard title={card.title} image={card.image} />
            </Link>
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
  margin-top: 60px; /* Adjust the top margin for smaller screens */
  display: flex;
  align-items: center; /* Center items vertically */
  position: relative; /* Set position to relative */

  @media (max-width: 576px) {
    margin-top: 30px; /* Further adjust the top margin for smaller screens */
  }
`;


const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid #1B2124; 
  display: inline;

  @media (max-width: 576px) {
    font-size: 1.3rem; 
  }
`;

const IconImage = styled.img`
  position: absolute; 
  top: -25px;

  left: -35px;
  width: 44px;
  height: 44px; 

  @media (max-width: 576px) {
    width: 25px; 
    height: 25px; 
    top: -15px; 
    left: -25px; 
  }
`;


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(270px, 1fr)); 
  gap: 10px;
  justify-items: center;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
