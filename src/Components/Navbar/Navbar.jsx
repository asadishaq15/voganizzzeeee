import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logoGreen from '../../assets/logo-green.webp';
import sampleProfile from '../../assets/sampleProfile.webp';
import { FaSearch } from 'react-icons/fa';
import { navlinks } from './navlinks';
import { Link, useNavigate } from 'react-router-dom';
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
  height: 100px;
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
  height: 30px;
  background-color: white;
  border: solid 2px #008001;
  border-radius: 15px;
  margin-left: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const ToggleSlider = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ sliderPosition }) => (sliderPosition === 'left' ? '2px' : 'calc(55% - 26px)')};
  width: 22px;
  height: 22px;
  background-color: #008001;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ sliderPosition }) => (sliderPosition === 'left' ? '0' : '22px')});
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 53px;
  border: 2px solid #008001;
  border-radius: 25px;
  padding: 5px;
  background-color: hsl(120, 50%, 95%);
  cursor: text;
`;
const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  width: calc(100% - 20px);
  padding: 5px;
  top: 30px;
  font-size: 16px;
  color: #333;
  background-color: transparent;
  border-radius: 20px;

  &::placeholder {
    color: black;
  }

  &:focus {
    background-color: transparent;
  }
`;


const SearchIcon = styled(FaSearch)`
  color: black; 

  margin-left:8px;
`;

const SearchText = styled.text`
margin-left:10px;
`;

const ShopButton = styled.button`
height: 48px;
  padding: 0 1rem;
  width:160px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 34px;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333333; 
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
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  padding: ${({ isOpen }) => (isOpen ? '10px 0' : '0')};

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
  const [sliderPosition, setSliderPosition] = useState('left');
  const navigate = useNavigate(); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSlider = () => {
    setSliderPosition(sliderPosition === 'left' ? 'right' : 'left');
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
            <SearchContainer>
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleInputChange}
              />
            </SearchContainer>
            <Link to="/shop"> <ShopButton>Shop</ShopButton></Link>
            <ToggleButton onClick={toggleSlider}>
              <ToggleSlider sliderPosition={sliderPosition} />
            </ToggleButton>
            <Link to="/myprofile"> <ProfileIcon src={sampleProfile} alt="Profile" /></Link>
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
            onClick={() => {
              setIsOpen(false);
              navigate(link.path); // Use the navigate function here
            }}
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
