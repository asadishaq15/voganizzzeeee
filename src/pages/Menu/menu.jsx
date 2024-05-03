

import React from 'react';
import headingBackground from "../../assets/Images/menu-bg.webp"
import "./menu.css"
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
const cardData = [
    {
      id: 1,
      title: 'Recipies',
      image: menu1,
    },
    {
      id: 2,
      title: 'Beauty',
      image: menu2,
    },
    {
      id: 3,
      title: 'HouseHold',
      image: menu3,
    },
    {
      id: 4,
      title: 'Travel',
      image: menu4,
    },
    {
      id: 5,
      title: 'Travel',
      image: menu5,
    },
    {
      id: 6,
      title: 'Travel',
      image: menu6,
    },
    {
      id: 7,
      title: 'Travel',
      image: menu7,
    },
    {
      id: 8,
      title: 'Travel',
      image: menu8,
    },
    {
      id: 9,
      title: 'Travel',
      image: menu9,
    },
  ];

const Menu = () => {
  return (
    <div>
   
     <div className="blogs-heading-container"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`, // Added a closing parenthesis after linear-gradient
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                padding: '5%',
                color:"white"
              }}
            >

            <h1 className="heading-menu">
            VeganizZze your Menu
            </h1>
           
        </div>
      
        <CardContainer>
        {cardData.map(card => (
          <HomeCard key={card.id} title={card.title} image={card.image} />
        ))}
      </CardContainer>
     
    </div>
  );
}

export default Menu;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr)); /* Four cards per row for all screens */
  gap: 20px;
  justify-items: center;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr)); /* Two cards per row for screens up to 992px */
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* One card per row for screens up to 576px */
  }
`;