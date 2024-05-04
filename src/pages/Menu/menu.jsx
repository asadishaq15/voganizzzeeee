

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
import Container from '../../Components/whyUs/whyVoganizzee';
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

  const slides = [
    {
        slideTitle: 'Why We Voganizzzeee',
        title: 'Video Title', // Add the video title here
        description: 'Video Description', // Add the video description here
        image1Src: 'path/to/image2.jpg',
        image2Src: 'path/to/image3.jpg',
        card1Title: 'Card 1 Title',
        card1Description: 'Card 1 Description',
        card2Title: 'Card 2 Title',
        card2Description: 'Card 2 Description',
      },
      {
        slideTitle: 'Mission Statement',
        title1: 'Slide 2 Title 1',
        title2: 'Slide 2 Title 2',
        description: 'Slide 2 Description',
        buttonText: 'Learn More',
        rightImageSrc: 'path/to/image4.jpg',
        isButtonVisible: true,
        buttonLink: '/link2',
        card1Title: 'Card 3 Title',
        card1Description: 'Card 3 Description',
        card2Title: 'Card 4 Title',
        card2Description: 'Card 4 Description',
        singlePhotoSrc: 'path/to/singlePhoto.jpg', // Add the path to the single photo
        rightTitle: 'Right Side Title', // Add the title for the right side
        rightDescription: 'Right Side Description', // Add the description for the right side
      },
]
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
        <Container/>
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