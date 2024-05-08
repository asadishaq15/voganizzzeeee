import React, { useState } from 'react';
import styled from 'styled-components';
import profileIcon from '../../assets/sampleProfile.webp';
import headingBackground from "../../assets/Images/myProfileMenu.webp"
import itemImage from '../../assets/Images/Product1.webp';
import recipe1 from '../../assets/Images/BreakFast.webp';
import recipe2 from '../../assets/Images/Lunch.webp';
import recipe3 from '../../assets/Images/Dinner.webp';
import SunshineIcon from "../../assets/SunShineWhite.webp";


const ProfileContainer = styled.div`
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
    font-size: 18px;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 30px;
`;

const ProfileIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const Username = styled.h2`
  margin: 0;
  font-weight: 600;
  color: #333;

`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OrdersSection = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h3`
  font-family:'PlayFair Display', san serif;
  font-size:40px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
  @media (max-width: 768px) {
    font-size:25px;
  }
  
`;
const SectionTitle2 = styled.h3`
  font-family:'PlayFair Display', san serif;
  font-size:20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
  
`;

const OrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 15px;
  background-color: #eaeaea;
  font-weight: 600;
  color: #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 15px;
`;

const ItemCard = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-weight: 600;
  color: #333;
`;

const OrderDate = styled.span`
  font-size: 14px;
  color: #666;
`;

const AccountSection = styled.div`
  width: 35%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AccountDetail = styled.div`
  margin-bottom: 15px;
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #333;
`;

const UpdatePasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #036015;
  margin-top: 10px;
`;

const UpdatePasswordButton = styled.button`
  background-color: #036015;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  width: auto;

  
  background-image: linear-gradient(to bottom, #4caf50, #388e3c); 

  &:hover {
    background-image: linear-gradient(to bottom, #388e3c, #2e7d32);
  }

  &:focus {
    background-image: linear-gradient(to bottom, #388e3c, #2e7d32); 
  }

  &:active {
    background-image: linear-gradient(to bottom, #1b5e20, #1b5e20); 
`;

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
  position: relative; 
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;


  border: 2px solid transparent;

 
  transition: border-color 0.3s ease;

  /* Add hover effect */
  &:hover {
    border-color: #4caf50; 
  }

  
  z-index: 1;
`;


const RecipeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RecipeTitle = styled.h4`
  font-weight: 600;
  color: #333;
  padding: 15px;
  align-items: center;
  display: flex;
  justify-content: center;
 
`;
const IconImage = styled.img`
  width: 50px; 
  height: 50px; 
  margin-right: 2px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: -2px;
    margin-bottom: 35px; 
  }
`;

const MyProfile = () => {
  const username = 'John Doe';
  const orders = [
    { item: 'Product 1', cost: 19.99, quantity: 2, date: '2023-05-01' },
    { item: 'Product 2', cost: 24.99, quantity: 1, date: '2023-04-15' },
    { item: 'Product 3', cost: 14.99, quantity: 3, date: '2023-03-20' },
  ];

  const recipes = [
    { image: recipe1, title: 'Grilled Chicken Salad' },
    { image: recipe2, title: 'Vegetable Stir-Fry' },
    { image: recipe3, title: 'Creamy Pasta Carbonara' },

  ];

  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    console.log('New password:', password);
  };

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
      padding: '3%',
      color: 'white',
    }}
  >
  
    <Title>
      <IconImage src={SunshineIcon} alt="Sunshine Icon" /> {/* Sunshine icon */}
      My VeganizZze Account
    </Title>
  </div>
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIcon src={profileIcon} alt="Profile Icon" />
        <Username>Hello, {username}</Username>
      </ProfileHeader>
      <ContentContainer>
        <OrdersSection>
          <SectionTitle>Previous Orders</SectionTitle>
          <OrdersTable>
            <thead>
              <tr>
                <TableHeader>Items</TableHeader>
                <TableHeader>Cost</TableHeader>
                <TableHeader>Quantity</TableHeader>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <ItemCard>
                      <ItemImage src={itemImage} alt="Item" />
                      <ItemDetails>
                        <ItemName>{order.item}</ItemName>
                        <OrderDate>{order.date}</OrderDate>
                      </ItemDetails>
                    </ItemCard>
                  </TableCell>
                  <TableCell>${order.cost.toFixed(2)}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </OrdersTable>
        </OrdersSection>
        <AccountSection>
          <SectionTitle2>My Account Details</SectionTitle2>
          <AccountDetail>
            <DetailLabel>Name:</DetailLabel> {username}
          </AccountDetail>
          <AccountDetail>
            <DetailLabel>Address:</DetailLabel> 123 Main Street, City, Country
          </AccountDetail>
          <AccountDetail>
            <DetailLabel>Email:</DetailLabel> john.doe@example.com
          </AccountDetail>
          <AccountDetail>
            <DetailLabel>Update Password:</DetailLabel>
            <UpdatePasswordInput
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={handlePasswordChange}
            />
            <UpdatePasswordButton onClick={handleUpdatePassword}>
              Update Password
            </UpdatePasswordButton>
          </AccountDetail>
        </AccountSection>
      </ContentContainer>
      <FavoritesSection>
        <FavoritesTitle>My Favorite Recipes</FavoritesTitle>
        <RecipesContainer>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index}>
              <RecipeImage src={recipe.image} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
            </RecipeCard>
          ))}
        </RecipesContainer>
      </FavoritesSection>
    </ProfileContainer>
    </>
  );
};

export default MyProfile;