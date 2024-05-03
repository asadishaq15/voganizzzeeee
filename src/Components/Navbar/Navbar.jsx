import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { navlinks } from '../../assets/navlinks';
import logoGreen from '../../assets/logo-green.webp';
import sampleProfile from '../../assets/sampleProfile.webp';
import { FaSearch } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
  }
`;

const themes = {
  light: {
    bodyBg: '#fff',
    textColor: '#333',
  },
  dark: {
    bodyBg: '#333',
    textColor: '#fff',
  },
};

const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 639px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 639px) {
    justify-content: flex-end;
  }
`;

const BurgerWrapper = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 640px) {
    display: none;
  }
`;

const BurgerBar = styled.div`
  width: 24px;
  height: 3px;
  background-color: #333;

  &:nth-child(2) {
    width: 60%;
    align-self: flex-end;
  }
`;


const NavLinks = styled.nav`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    color: #666;
  }
`;
const ToggleButton = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  background-color: #white;
  border: solid 2px #008001;
  border-radius: 15px;
  margin-left: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const ToggleSlider = styled.div`
  position: absolute;
  top: 3px;
  left:2px;
  left: ${({ theme }) => (theme === 'light' ? '2px' : 'calc(100% - 30px)')};
  width: 12px;
  height: 12px;
  border: 4px solid #008001; /* Border color for the hollow slider */
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${({ theme }) => (theme === 'light' ? 'translateX(0)' : 'translateX(-26px)')};
`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 35px;
  border: 2px solid #008001;
  border-radius: 25px;
  padding: 5px;
  background-color: hsl(120, 50%, 95%);
  cursor: text; /* Add cursor pointer on hover */
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  width: calc(100% - 30px); /* Adjust width of input */
  padding: 5px; /* match container padding */
  font-size: 16px; /* Adjust font size as needed */
  color: #333; /* Text color */
  background-color: #f0f0f0; /* Same background color as the container */
  border-radius: 20px; /* Adjust border radius as needed */

  &::placeholder {
    color: black; 
  }

  &:focus {
    background-color: #ffffff; /* Change background color when input is focused */
  }
`;
const SearchIcon = styled(FaSearch)`
  color: black; /* Green color */

  margin-left:8px;
`;

const SearchText = styled.text`
margin-left:10px;
`;

const ShopButton = styled.button`
  height: 50px;
  padding: 0 1rem;
  width:170px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 34px;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

const ProfileIcon = styled.img`
  height: 74px;
  width: 74px;
  border-radius: 50%;
  margin-left: 1rem;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 2px -2px #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? '40px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '6px 0' : '0')};

  @media (min-width: 640px) {
    display: none;
  }
`;

const DropdownLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  padding: 0.5rem 0;

  &:hover {
    color: #666;
  }
`;

const Navbar222 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('light');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const handleOutsideClick = (event) => {
    if (!event.target.closest('header')) {
      setIsOpen(false);
    }
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleScroll = () => {
    setIsOpen(false);
  };
  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', query);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
         <GlobalStyle theme={themes[theme]} />
      <HeaderContainer>
        <Link to="/">
          <Logo src={logoGreen} alt="Logo" />
        </Link>
        <NavWrapper>
          <NavLinks>
            <SearchContainer >
              <SearchIcon />
              <SearchText>Search</SearchText>
            </SearchContainer>
            <ShopButton>Shop</ShopButton>
            <ToggleButton>
              <ToggleSlider theme={theme} />
            </ToggleButton>
            <ProfileIcon src={sampleProfile} alt="Profile" />
          </NavLinks>
          <BurgerWrapper onClick={toggleMenu}>
            <BurgerBar />
            <BurgerBar />
            <BurgerBar />
          </BurgerWrapper>
        </NavWrapper>
        <DropdownMenu isOpen={isOpen}>
          {navlinks.map((link) => (
            <DropdownLink
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </HeaderContainer>

  </>
  );
};

export default Navbar222;
