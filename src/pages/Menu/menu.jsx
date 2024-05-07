

import React from 'react';
import headingBackground from "../../assets/Images/menu-bg.webp"
import styled from 'styled-components';
import menu1 from "../../assets/Images/menu-1.webp"
import menu2 from "../../assets/Images/menu-2.webp"
import menu3 from "../../assets/Images/menu-3.webp"
import menu4 from "../../assets/Images/menu-4.webp"
import menu5 from "../../assets/Images/menu-5.webp"
import menu6 from "../../assets/Images/menu-6.webp"
import menu7 from "../../assets/Images/menu-7.webp"
import menu8 from "../../assets/Images/menu-8.webp"
import menu9 from "../../assets/Images/menu-9.webp"
import HomeCard from '../../Components/HomeCard/homeCard';
import Container from '../../Components/whyUs/whyVoganizzee';
import WhyUs from '../../Components/whyUs/whyVoganizzee';
import WhyVoganizzee from '../../Components/whyUs/whyVoganizzee';
import MissionStatement from '../../Components/MissionStatement/missionStatement';
const cardData = [
    {
      id: 1,
      title: 'Breakfast',
      image: menu1,
    },
    {
      id: 2,
      title: 'Lunch',
      image: menu2,
    },
    {
      id: 3,
      title: 'Dinner',
      image: menu3,
    },
    {
      id: 4,
      title: 'Salads & Dressings',
      image: menu4,
    },
    {
      id: 5,
      title: 'Breads',
      image: menu5,
    },
    {
      id: 6,
      title: 'Snacks',
      image: menu6,
    },
    {
      id: 7,
      title: 'Drinks',
      image: menu7,
    },
    {
      id: 8,
      title: 'Desserts',
      image: menu8,
    },
    {
      id: 9,
      title: 'Pastry',
      image: menu9,
    },
  ];

  
const Menu = () => {
  return (
    <div>
   
     <div className="blogs-heading-container"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,   
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                padding: '5%',
                color:"white"
              }}
            >

            <Title >
            VeganizZze your Menu
            </Title>
           
        </div>
      <Wrapper>
        <CardContainer>
        {cardData.map(card => (
          <HomeCard key={card.id} title={card.title} image={card.image} />
        ))}
      </CardContainer>
      </Wrapper>
      {/* <MissionStatement/> */}
        
        
    </div>
  );
}

export default Menu;

const CardContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three cards per row for all screens */
  gap: 0px;
  justify-items: center;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr)); /* Two cards per row for screens up to 992px */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* One card per row for screens up to 576px */
  }
`;

const Wrapper = styled.div`
max-width: 1200px; /* Set the maximum width to 1200px */
margin: 0 auto; /* Center the component horizontally */
padding: 20px; /* Add padding for better spacing on smaller screens */

@media (max-width: 768px) { /* Media query for screens smaller than 768px */
  padding: 10px; /* Reduce padding on smaller screens */
}
 
`;
const Title = styled.h2`
font-size: 48px;
font-family: 'Playfair Display', serif;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) { /* Media query for screens smaller than 768px */
font-size: 28px;/* Reduce padding on smaller screens */
}
 
`;