import React from 'react';
import styled from 'styled-components';

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
  columns: 2; /* Display ingredients in two columns */

  @media (max-width: 768px) {
    columns: 1; /* Display ingredients in a single column on smaller screens */
    padding: 20px; /* Add padding on smaller screens */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Further reduce padding on even smaller screens */
  }
`;

const IngredientItem = styled.li`
  margin-bottom: 10px;
  padding: 25px;
  border-radius: 30px;

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 20px;
    padding:10px;
  }
`;

const IngredientTick = styled.span`
  margin-right: 5px;
`;

const PortionsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  padding:15px;
`;

const PortionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const PortionContent = styled.ul`
  margin-top: 20px;
  background-color: #f5fce4;
  list-style-type: none; /* Remove default bullet style */
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


const Ingredients = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <LeftHalf>
          <Title>Ingredients</Title>
          <IngredientsList>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 1</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 2</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 3</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 4</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 5</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 6</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 7</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            <IngredientItem><IngredientTick>&#10003;</IngredientTick> Ingredient 8</IngredientItem>
            {/* Add more ingredients as needed */}
          </IngredientsList>
        </LeftHalf>
        <RightHalf>
          <PortionsContainer>
            <PortionTitle>Portion Up</PortionTitle>
            <PortionContent>
              <ListItem>Prep the eggs: Crack the eggs into a bowl.</ListItem>
              <ListItem>Melt the butter: In an 8-inch nonstick skillet over medium-low heat, melt the butter.</ListItem>
              <ListItem>Add the eggs and cook the omelette: Add the eggs to the skillet and cook without stirring until the edges begin to set.</ListItem>
              {/* Add more steps as needed */}
            </PortionContent>
          </PortionsContainer>
          <PortionsContainer>
            <PortionTitle>Portion Down</PortionTitle>
            <PortionContent>
              <TickItem>&#10003; Lorem ipsum dolor sit amet</TickItem>
              <TickItem>&#10003; Consectetur adipiscing elit</TickItem>
              <TickItem>&#10003; Nullam pretium nunc ut arcu vestibulum</TickItem>
            </PortionContent>
          </PortionsContainer>
        </RightHalf>
      </InnerContainer>
    </Wrapper>
  );
}

export default Ingredients;
