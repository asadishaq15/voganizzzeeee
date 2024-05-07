import React, { useState } from 'react';
import styled from 'styled-components';
import copyIcon from "../../assets/Images/copyIcon.webp"
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const RightHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const IngredientsList = styled.ul`
background-color: #f5fce4;
  list-style-type: none;
  columns: 2;
  

  @media (max-width: 768px) {
    columns: 1;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const IngredientItem = styled.li`
  margin-bottom: 10px;
  padding: 25px;
  border-radius: 30px;

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 20px;
    padding: 10px;
  }
`;

const IngredientTick = styled.span`
  margin-right: 5px;
`;

const PortionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
`;

const PortionTitle = styled.h3`
font-family: 'Playfair Display', serif; 
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
  position: relative; /* Add relative positioning */

  @media (max-width: 480px) {
    font-size: 18px;
    top: -20px; /* Adjust the top position for smaller screens */
  }
`;

const PortionContent = styled.ul`
  margin-top: 20px;
  background-color: #f5fce4;
  list-style-type: none;
`;

const TickItem = styled.li`
  margin-bottom: 5px;
  padding: 20px;
  border-radius: 30px;

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 20px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 30px;

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 20px;
  }
`;

const CopyButton1 = styled.button`
  position: absolute;
  top: 8%;
  transform: translateY(-20%);
  left: 81%;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: none;
  color: black;
  width: 70px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  z-index: 1; /* Ensure button is above content */
  
  &:hover {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    position: absolute; /* Change back to absolute for smaller screens */
    top: 3%;
    transform: translateY(-50%);
    right: 15px; /* Adjust the right position */
    padding: 5px 8px;
  }

  @media (max-width: 480px) {
    right: 10px;
    padding: 5px 6px;
  }
`;



const CopyIcon = styled.span`
  margin-right: 5px;
  
`;


const Ingredients = () => {
    const [copiedText, setCopiedText] = useState('');

    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      setCopiedText(`Copied: ${text}`);
      setTimeout(() => setCopiedText(''), 2000); // Reset the copiedText state after 2 seconds
    };
  
    const getIngredientsText = () => {
      const ingredients = Array.from(document.querySelectorAll('.ingredient-item')).map(
        (item) => item.textContent.trim()
      );
      return ingredients.join(', ');
    };
  
    const getPortionUpText = () => {
      const portionUpItems = Array.from(document.querySelectorAll('.portion-up-item')).map(
        (item) => item.textContent.trim()
      );
      return portionUpItems.join('\n');
    };
  
    const getPortionDownText = () => {
      const portionDownItems = Array.from(document.querySelectorAll('.portion-down-item')).map(
        (item) => item.textContent.trim()
      );
      return portionDownItems.join('\n');
    };
  return (

    <Wrapper>
      <InnerContainer>
        <LeftHalf>
          <Title>Ingredients</Title>
         
          <IngredientsList>
          <CopyButton1 onClick={() => handleCopy(getIngredientsText())}>
            <CopyIcon ><img  src={copyIcon}  ></img></CopyIcon>
            Copy
          </CopyButton1>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 1</IngredientItem>
            <IngredientItem className="ingredient-item" ><IngredientTick>&#10003;</IngredientTick> Ingredient 2</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 3</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 4</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 5</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 6</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 7</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem className="ingredient-item"><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            {/* Add more ingredients as needed */}
          </IngredientsList>
        </LeftHalf>
        <RightHalf>
          <PortionsContainer>
            <PortionTitle>The Magic</PortionTitle>
            <PortionContent>
            <CopyButton1 onClick={() => handleCopy(getPortionUpText())}>
              <CopyIcon><img src={copyIcon}></img></CopyIcon>
              Copy
            </CopyButton1>
              <ListItem className="portion-up-item">Prep the eggs: Crack the eggs into a bowl.</ListItem>
              <ListItem className="portion-up-item">Melt the butter: In an 8-inch nonstick skillet over medium-low heat, melt the butter.</ListItem>
              <ListItem className="portion-up-item">Add the eggs and cook the omelette: Add the eggs to the skillet and cook without stirring until the edges begin to set.</ListItem>
              {/* Add more steps as needed */}
            </PortionContent>
          </PortionsContainer>
          <PortionsContainer>
            <PortionTitle>Tips</PortionTitle>
            <PortionContent>
              <TickItem className="portion-down-item">&#10003; Lorem ipsum dolor sit amet</TickItem>
              <TickItem className="portion-down-item">&#10003; Consectetur adipiscing elit</TickItem>
              <TickItem className="portion-down-item">&#10003; Nullam pretium nunc ut arcu vestibulum</TickItem>
            </PortionContent>
          </PortionsContainer>
        </RightHalf>
      </InnerContainer>
    </Wrapper>
  );
}

export default Ingredients;
