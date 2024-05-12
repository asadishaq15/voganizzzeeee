import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import headingBackground from "../../assets/Images/menu-bg.webp";
import menu1 from "../../assets/Images/menu-1.webp";
import menu2 from "../../assets/Images/menu-2.webp";
import menu3 from "../../assets/Images/menu-3.webp";
import menu4 from "../../assets/Images/menu-4.webp";
import menu5 from "../../assets/Images/menu-5.webp";
import menu6 from "../../assets/Images/menu-6.webp";
import menu7 from "../../assets/Images/menu-7.webp";
import menu8 from "../../assets/Images/menu-8.webp";
import menu9 from "../../assets/Images/menu-9.webp";
import HomeCard from '../../Components/HomeCard/homeCard';
import SunshineIcon from "../../assets/SunShineWhite.webp"; 
import MenuCard from '@/Components/MenuCard/menuCard';

const cardData = [
  { id: 1, title: 'Breakfast', image: menu1, route: '/recipies' },
  { id: 2, title: 'Lunch', image: menu2, route: '/recipies' },
  { id: 3, title: 'Dinner', image: menu3, route: '/recipies' },
  { id: 4, title: 'Salads & Dressings', image: menu4, route: '/recipies' },
  { id: 5, title: 'Breads', image: menu5, route: '/recipies' },
  { id: 6, title: 'Snacks', image: menu6, route: '/recipies' },
  { id: 7, title: 'Drinks', image: menu7, route: '/recipies' },
  { id: 8, title: 'Desserts', image: menu8, route: '/recipies' },
  { id: 9, title: 'Pastry', image: menu9, route: '/pastry' },
];

const Menu = () => {
  return (
    <div>
      <div
        className="blogs-heading-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,   
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          padding: '4%',
          color: 'white'
        }}
      >
        <Title>
          <IconImage src={SunshineIcon} alt="Sunshine Icon" /> {/* Sunshine icon */}
          VeganizZze your Menu
        </Title>
      </div>
      <Wrapper>
        <CardContainer>
          {cardData.map(card => (
            <Link to={card.route} key={card.id}>
              <MenuCard title={card.title} image={card.image} />
            </Link>
          ))}
        </CardContainer>
      </Wrapper>
    </div>
  );
};

export default Menu;

const CardContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  justify-items: center;
  margin-top: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-family: 'Playfair Display', serif;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const IconImage = styled.img`
  width: 50px; 
  height: 50px; 
  margin-right: 2px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 2px;
    margin-bottom: 40px; 
  }
`;
