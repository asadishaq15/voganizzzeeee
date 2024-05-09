import React from 'react';
import styled from 'styled-components';
import WhyUs from "../../assets/Images/WhyWe.webp"
import MissionStatement from "../../assets/Images/MissionStatement.webp"
import VisionStatement from "../../assets/Images/VisionStatement.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import likeIcon from "../../assets/icons/thumb_up_alt.webp"
import CommentIcon from "../../assets/icons/Comment.webp"
import ShareIcon from "../../assets/icons/share.webp"
import SunshineIcon from "../../assets/sunShineIcon.webp"
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto; 
  padding: 20px; 

  @media (max-width: 768px) { 
    padding: 10px; /* Reduce padding on smaller screens */
  }
`;

const OuterContainer = styled.div`
padding: 10px;

@media (max-width: 768px) { 
  padding: 10px; /* Reduce padding on smaller screens */
}
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) { 
  
    align-items: flex-start; 
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-family: 'Playfair Display', serif;
  @media (max-width: 768px)
   { 
    font-size: 28px;
 }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between; /* Push items to the right corner */
`;
const Button = styled.button`
  background-color: transparent;
  border: 1px solid #749A21;
  cursor: pointer;
  border-radius:none;
  font-size: 20px;
  color:#749A21;
  padding: 8px 12px;
  margin-right: 10px;
  transition: color 0.3s; /* Add transition for smooth color change */

  &:hover {
    color: #FFFFFF; /* Change color to white on hover */
    background-color:#749A21;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: 768px) { /* Media query for screens smaller than 768px */
    flex-direction: column; /* Change to column layout on smaller screens */
  }
`;
const LeftHalf = styled.div`
  flex: 1;
  display: flex;
  margin-right: 20px;
  flex-direction: column;

  @media (max-width: 768px) { /* Media query for screens smaller than 768px */
    margin-right: 0; /* Remove right margin on smaller screens */
    margin-bottom: 20px; /* Add bottom margin for spacing */
  }
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

`;

const CardContent = styled.div`
background-color:#F2F4F5;
padding :20px;

`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  
`;

const CardDescription = styled.p`
  margin-bottom: 10px;
`;

const Hashtags = styled.button`
  font-size: 14px;
  color: white;
  background-color: #749A21;
  margin-bottom: 10px;
  padding: 8px 15px;
  width: auto; /* Adjust the width to fit the content */

`;

const ReadMoreLink = styled.a`
  color: #749A21;
  font-size: 14px;
  cursor: pointer;
  transition: border-bottom 0.3s ease;
  border-bottom: 3px solid #749A21;

  &:hover {
    color: #333;
    border-bottom: 1px solid #333;
  }
`;


const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap; /* Allow content to wrap to next line if needed */
`;


const CardDate = styled.span`
  font-size: 14px;
  color: #888;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the date horizontally */
`;

const CardIcons = styled.div`
  display: flex;
  align-items: center;
`;
const CardIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

const InnerCardContainer = styled.div`
  margin-bottom: 20px;
`;

const InnerCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) { /* Media query for screens smaller than 768px */
    flex-direction: column; /* Change to column layout on smaller screens */
    align-items: flex-start; /* Align items to the left */
  }
`;

const InnerCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-right: 20px;

  @media (max-width: 768px) { /* Media query for screens smaller than 768px */
    margin-right: 0; /* Remove right margin on smaller screens */
    margin-bottom: 10px; /* Add bottom margin for spacing */
  }
`;

const InnerCardContent = styled.div`

`;

const InnerCardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InnerCardDescription = styled.p`
  margin-bottom: 10px;
`;

const IconImage = styled.img`
  position: absolute; 
  top: -22px;

  left: -50px;
  width: 44px;
  height: 44px; 

  @media (max-width: 576px) {
    width: 30px; 
    height: 30px; 
    top: -20px; 
    left: -40px; 
  }
`;
const WhyVoganizzee = () => {
  return (
    <Wrapper>
    <OuterContainer>
        <TopContainer>
        <IconImage src={SunshineIcon} alt="Custom Icon" />
      <Title>Why we VeganizZze</Title>
      <ButtonContainer>
      <Button><FontAwesomeIcon icon={faAngleLeft} /></Button>
<Button><FontAwesomeIcon icon={faAngleRight} /></Button>
      </ButtonContainer>
      </TopContainer>
      <InnerContainer>
        <LeftHalf>
          <CardContainer>
            <CardImage src={WhyUs} alt="Why Voganizzee" />
          </CardContainer>
          <CardContent>
          <Hashtags>Food</Hashtags>
            <CardTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dui lacus.</CardTitle>
            
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. 
            </CardDescription>
            <CardDetails>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <ReadMoreLink>Read More</ReadMoreLink>
    <CardDate>02 January 2024</CardDate>
  </div>
  <CardIcons>
    <CardIcon>< img src={likeIcon} /></CardIcon>
    <CardIcon>< img src={CommentIcon} /></CardIcon>
    <CardIcon>< img src={ShareIcon} /></CardIcon>
  </CardIcons>
</CardDetails>
          </CardContent>
        </LeftHalf>
        <RightHalf>
          <InnerCardContainer>
            <InnerCard>
              <InnerCardImage src={MissionStatement} alt="MissionStatement" />
              <InnerCardContent>
                <InnerCardTitle>Mission Statement</InnerCardTitle>
                <InnerCardDescription>
                  Lorem ipsum dolor sit amet consectetur. Tellus sed malesuada etiam et. Lobortis aenean consectetur sit est tincidunt in ut. Varius at consectetur rhoncus aliquet nunc et justo turpis pretium. Quisque hendrerit bibendum turpis gravida aliquam rutrum arcu proin ipsum.Quisque hendrerit bibendum turpis gravida aliquam rutrum arcu proin ipsum.
                </InnerCardDescription>
                <ReadMoreLink>Read More</ReadMoreLink>
              </InnerCardContent>
            </InnerCard>
            <InnerCard>
              <InnerCardImage src={VisionStatement} alt="VisionStatement" />
              <InnerCardContent>
                <InnerCardTitle>Vision Statement</InnerCardTitle>
                <InnerCardDescription>
                  Lorem ipsum dolor sit amet consectetur. Tellus sed malesuada etiam et. Lobortis aenean consectetur sit est tincidunt in ut. Varius at consectetur rhoncus aliquet nunc et justo turpis pretium. Quisque hendrerit bibendum turpis gravida aliquam rutrum arcu proin ipsum.Quisque hendrerit bibendum turpis gravida aliquam rutrum arcu proin ipsum.
                </InnerCardDescription>
                <ReadMoreLink>Read More</ReadMoreLink>
              </InnerCardContent>
            </InnerCard>
          </InnerCardContainer>
        </RightHalf>
      </InnerContainer>
    </OuterContainer>
    </Wrapper>
  );
};

export default WhyVoganizzee;
