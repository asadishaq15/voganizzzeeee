import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import headingBackground from '../../assets/Images/BeautyPageBg.webp';
import Dublin from '../../assets/Images/Dublin.webp';
import recipe1 from '../../assets/Images/BreakFast.webp';
import recipe2 from '../../assets/Images/Lunch.webp';
import recipe3 from '../../assets/Images/Dinner.webp';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 1300px;
  margin: 0 auto;

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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 4rem;

`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;  
  height:auto;

  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  height: auto;

  img {
    width: 100%;
    height: 100%; /* Set image height to 100% of its container */
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  flex: 2;


  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ContentItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%; 
  padding:10px;
  h3 {
    font-size: 1.4rem;
    font-family: 'Ubuntu', sans-serif; 
    margin-bottom: 0.5rem;
  }

  .brand-location {
    font-family: 'Lexend', sans-serif; 
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size:16;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    font-size:14px;
  }
`;


const BrandName= styled.h4`
margin-right:10px

`

const FavoritesSection = styled.div`
  margin-top: 40px;
`;

const FavoritesTitle = styled.h3`
  font-family: 'PlayFair Display', san serif;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    font-size:25px;
  }
`;

const RecipesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

const RecipeTitle = styled.h4`
  font-weight: 600;
  color: #333;
  padding: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
 
`;

const data = [
  {
    image: Dublin,
    title1: 'Dublin',
    brandName: 'Brand Name',
    location: 'New York United States',
    description1: 'Lorem ipsum dolor sit amet consectetur. Amet quis velit proin fermentum. Commodo et imperdiet fringilla et tristique. Nisi mauris natoque viverra euismod arcu nisl tellus cras massa. Netus dictum sed diam mauris praesent. Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis.',
    title2: 'Watch out for',
    description2: 'Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam .',
  },
  
];
const recipes = [
    { image: recipe1, title: 'Dinning', route: '/restaurants' },
    { image: recipe2, title: 'Food', route: '/foodshops' },
    { image: recipe3, title: 'Cosmetics', route: '/cosmetics' },
  ];
  


const TravelCards = () => {
  return (
   
    <>
      <div
        className="blogs-heading-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headingBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          padding: '5%',
          color: 'white',
        }}
      >
        <Title>TravelCards</Title>
      </div>
       <Wrapper>
      <CardContainer>
        {data.map((item, index) => (
          <CardWrapper key={index}>
            <ImageContainer>
              <img src={item.image} alt={item.title} />
            </ImageContainer>
            <ContentContainer>
              <ContentItem>
                <h3>{item.title1}</h3>
               
                <p>{item.description1}</p>
              </ContentItem>
              <ContentItem>
                <h3>{item.title2}</h3>
                <p>{item.description2}</p>
              </ContentItem>
            </ContentContainer>
          </CardWrapper>
        ))}
      </CardContainer>
      <FavoritesSection>
      <RecipesContainer>
          {recipes.map((recipe, index) => (
            <Link to={recipe.route} key={index}>
              <RecipeCard>
                <RecipeImage src={recipe.image} alt={recipe.title} />
                <RecipeTitle>{recipe.title}</RecipeTitle>
              </RecipeCard>
            </Link>
          ))}
        </RecipesContainer>
      </FavoritesSection>
      </Wrapper>
      </>
  );
};

export default TravelCards;
