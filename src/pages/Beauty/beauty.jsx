import React from 'react';
import styled from 'styled-components';
import headingBackground from '../../assets/Images/BeautyPageBg.webp';
import BeautyCard1 from '../../assets/Images/BeautyCard1.webp';
import BeautyCard2 from '../../assets/Images/BeautyCard2.webp';
import BeautyCard3 from '../../assets/Images/BeautyCard3.webp';

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
  padding: 1rem; 

  img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
  }

  @media (min-width: 768px) {
    padding: 0; 
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 1rem; 

  @media (min-width: 768px) {
    padding: 1rem; 
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
    margin-bottom: 0.5rem;
    font-weight:bold;
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
const data = [
  {
    image: BeautyCard1,
    title1: 'Fragrances',
    brandName: 'Brand Name',
    location: 'New York United States',
    description1: 'Lorem ipsum dolor sit amet consectetur. Amet quis velit proin fermentum. Commodo et imperdiet fringilla et tristique. Nisi mauris natoque viverra euismod arcu nisl tellus cras massa. Netus dictum sed diam mauris praesent.',
    title2: 'Description',
    description2: 'Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis.',
  },
  {
    image: BeautyCard2,
    title1: 'Make_up',
    brandName: 'Brand Name',
    location: 'New York United States',
    description1: 'Lorem ipsum dolor sit amet consectetur. Amet quis velit proin fermentum. Commodo et imperdiet fringilla et tristique. Nisi mauris natoque viverra euismod arcu nisl tellus cras massa. Netus dictum sed diam mauris praesent.',
    title2: 'Description',
    description2: 'Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis.Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis.',
  },
  {
    image: BeautyCard3,
    title1: 'Skin Care',
    brandName: 'Brand Name',
    location: 'New York United States',
    description1: 'Lorem ipsum dolor sit amet consectetur. Amet quis velit proin fermentum. Commodo et imperdiet fringilla et tristique. Nisi mauris natoque viverra euismod arcu nisl tellus cras massa. Netus dictum sed diam mauris praesent.',
    title2: 'Description',
    description2: 'Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis Lorem ipsum dolor sit amet consectetur. Ultricies vestibulum gravida sed amet eget orci aliquet faucibus volutpat. Quis non habitasse mauris dui. Sagittis odio dui facilisi diam tristique posuere tellus gravida nulla. Nunc montes aliquam dolor massa libero sed ut. Sollicitudin aliquet turpis.',
  },
];

const Beauty = () => {
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
          padding: '5%',
          color: 'white',
        }}
      >
        <Title>Beauty</Title>
      </div>
      <CardContainer>
        {data.map((item, index) => (
          <CardWrapper key={index}>
            <ImageContainer>
              <img src={item.image} alt={item.title} />
            </ImageContainer>
            <ContentContainer>
              <ContentItem>
                <h3>{item.title1}</h3>
                <div className="brand-location">
                <BrandName><h4>{item.brandName}</h4></BrandName>
                <h5>{item.location}</h5>
            </div>
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
    </div>
  );
};

export default Beauty;
