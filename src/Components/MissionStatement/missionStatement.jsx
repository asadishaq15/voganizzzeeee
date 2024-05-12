import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import missionStatemnent from "../../assets/Images/MissionStatement.webp"

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) { 
    padding: 10px; 
  }
`;

const OuterContainer = styled.div`
padding: 20px;

@media (max-width: 768px) { 
  padding: 10px; 
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
  font-weight:bold;
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
  justify-content: space-between;
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

  flex: 2;
  display: flex;
  flex-direction: column;
`;



const CardImage = styled.img`
  width: 100%; 
  height: 100%; /* Set the height to 100% */
  object-fit: cover; 
  border-radius:12px;
`;

const InnerCardDescription = styled.p`
line-height: 1.7;
  text-align: justify;
`;

const MissionStatement = () => {
  return (
    <Wrapper>
    <OuterContainer>
        <TopContainer>
      <Title>Mission Statement</Title>
      <ButtonContainer>
      <Button><FontAwesomeIcon icon={faAngleLeft} /></Button>
<Button><FontAwesomeIcon icon={faAngleRight} /></Button>
      </ButtonContainer>
      </TopContainer>
      <InnerContainer>
        <LeftHalf>

            <CardImage src={missionStatemnent} alt="missionStatemnent" />
         
        
        </LeftHalf>
        <RightHalf>
        <InnerCardDescription>
        Lorem ipsum dolor sit amet consectetur. Sodales purus arcu mauris augue cursus platea aliquam sem. Arcu nisl luctus ultrices porttitor ultrices. Quam massa massa orci fermentum imperdiet cursus sed quis amet. Pellentesque eu fusce accumsan aliquet nulla elementum ipsum commodo dui. Mi nec volutpat eget pellentesque aliquet nulla senectus. Nisl adipiscing scelerisque non nisl nam odio odio vivamus vestibulum. Maecenas turpis placerat sed sit amet. Eget lectus a etiam tristique turpis cras. Urna cursus pellentesque phasellus pellentesque risus pellentesque.Lorem ipsum dolor sit amet consectetur. Sodales purus arcu mauris augue cursus platea aliquam sem. Arcu nisl luctus ultrices porttitor ultrices. Quam massa massa orci fermentum imperdiet cursus sed quis amet. Pellentesque eu fusce accumsan aliquet nulla elementum ipsum commodo dui. Mi nec volutpat eget pellentesque aliquet nulla senectus. Nisl adipiscing scelerisque non nisl nam odio odio vivamus vestibulum.
         Maecenas turpis placerat sed sit amet. Eget lectus a etiam tristique turpis cras. Urna cursus pellentesque phasellus pellentesque risus pellentesque.Lorem ipsum dolor sit amet consectetur. Sodales purus arcu mauris augue cursus platea aliquam sem. Arcu nisl luctus ultrices porttitor ultrices. Quam massa massa orci fermentum imperdiet cursus sed quis amet. Pellentesque eu fusce accumsan aliquet nulla elementum ipsum commodo dui. Mi nec volutpat eget pellentesque aliquet nulla senectus. Nisl adipiscing scelerisque non nisl nam odio odio vivamus vestibulum. Maecenas turpis placerat sed sit amet. Eget lectus a etiam tristique turpis cras. Urna cursus pellentesque phasellus pellentesque risus pellentesque.                </InnerCardDescription>
        </RightHalf>
      </InnerContainer>
    </OuterContainer>
    </Wrapper>
  );
};

export default MissionStatement;
