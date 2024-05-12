import React from 'react';
import headingBackground from "../../assets/Images/menu-bg.webp"
import styled from 'styled-components';

import chef from "../../assets/Images/chef.webp"
import PrepTime from "../../assets/Images/prepTime2.webp"
import CookingTime from "../../assets/Images/cookingTime.webp"
import Bookmark from "../../assets/Images/bookmark.webp"
import Ingredients from '../../Components/Ingredients/ingredients';
import CustomTabs from '@/Components/DescriptionTab/descriptionTab';
import SunshineIcon from "../../assets/SunShineWhite.webp";
import { Book } from 'lucide-react';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftHalf = styled.div`
  flex: 1;
  display: flex;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const RightHalf = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    flex: 1;
    padding:10px;
  }
`;

const CardImage = styled.img`
  width: auto; 
  max-height: 100%; 
  object-fit: contain; 
  border-radius: 12px;

  @media (max-width: 480px) {
    max-width: 100%;
    height: auto; 
    margin:auto;
  }
`;

const RecipeTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 480px) {
    font-size: 24px;
 
  }
`;

const RecipeData = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  font-family: 'Playfair Display', serif;

  @media (max-width: 480px) {
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    margin-bottom: 10px;
  }
`;

const Separator = styled.span`
  margin: 0 20px; /* Add margin around the separator */
  font-size: 25px;

  @media (max-width: 480px) {
display:none;
  }
`;

const RecipeLabel = styled.span`
  font-size: 25px;
  margin-right: 8px;
  margin-left: 12px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 480px) {
    font-size: 17px;
   
    margin-top: 8px;
    margin-right: 6px;
    margin-left: 8px;
  }
`;

const Values = styled.span`
  font-size: 25px;
  margin-right: 8px;
  font-weight:bold;
  font-family: 'Playfair Display', serif;

  @media (max-width: 480px) {
    margin-top: 8px;
    font-size: 15px;
    margin-right: 6px;
    margin-bottom: 0px;
  }
`;

const RecipeParagraph = styled.p`
  margin-top: 5px;
  font-size: 15px;
  text-align: justify;
  font-family: 'Poppins';

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust margin as needed */
`;

const RoundButton = styled.button`
  border-radius: 20px; /* Adjust border-radius as needed */
  border: solid 1px #749B22;
  max-width: 150px; /* Adjust max-width as needed */
  padding: 10px 20px; /* Adjust padding as needed */
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #749B22;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add box shadow */
  transition: all 0.3s ease;
  outline: none;

  @media (max-width: 768px) {
    max-width: 100px; /* Adjust max-width for smaller screens */
    padding: 6px 12px; /* Adjust padding for smaller screens */
    font-size: 12px; /* Adjust font size for smaller screens */
    border-radius: 16px;  /* Adjust font size for smaller screens */
  }

  &:hover {
    background-color:#71991B;
    color:#FFFFFF;
    transform: translateY(-2px); /* Add slight lift effect on hover */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Enhance box shadow on hover */
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

const Icon = styled.img`
  width: 30px; 
  height: 30px; 

  
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
    margin-top:10px;
    margin-left:8px;
 
  }
`;




const Recipies = () => {
  return (
    <div>
      <div className="blogs-heading-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          padding: '3%',
          color: "white"
        }}
      >
        <Title>
          <IconImage src={SunshineIcon} alt="Sunshine Icon" /> {/* Sunshine icon */}
          Recipie
        </Title>
      </div>
      <Wrapper>
        <InnerContainer>
          <LeftHalf>
            <CardImage src={chef} alt="chef" />
          </LeftHalf>
          <RightHalf>
            <RecipeTitle>Recipe Name</RecipeTitle>
            <RecipeData>
            <Icon src={PrepTime} alt="Clock Icon" />
              <RecipeLabel>Prep Time:</RecipeLabel>
              <Values>15 Min</Values>
              <Separator>|</Separator>
              <Icon src={CookingTime} alt="Clock Icon" />
              <RecipeLabel>Cooking Time:</RecipeLabel>
              <Values>30 Min</Values>
              <Separator>|</Separator>
              <Icon src={CookingTime} alt="Clock Icon" />
              <RecipeLabel>Portions:</RecipeLabel>
              <Values>7</Values>
            </RecipeData>
            <RecipeParagraph>
              Quid ex ea voluptate velit esse, quid est eligendi optio, cumque nihil impedit, quo minus id, de voluptate velit esse, ut de utilitatibus, nihil impedit, quo quaerimus, non quo aut reiciendis voluptatibus maiores alias consequatur
            </RecipeParagraph>
          </RightHalf>
        </InnerContainer>
      </Wrapper>
      
      <Ingredients/>
      <ButtonContainer>
        <RoundButton>More Recipe</RoundButton>
        <RoundButton>Print Recipe</RoundButton>
        <RoundButton><img src={Bookmark} style={{width:"20px", marginRight:"4px"}}></img>Favorite</RoundButton>
      </ButtonContainer>
    <CustomTabs/>
    </div>
  );
}

export default Recipies;

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
