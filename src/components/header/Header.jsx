import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background: #FFFFFF;
  padding: 15px 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #B8860B; // Dark golden color
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const MenuItems = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    padding: 20px 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled(motion.a)`
  margin: 0 15px;
  color: #8B0000; // Dark red color
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #B8860B; // Dark golden color
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #B8860B; // Dark golden color on hover
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #8B0000; // Dark red color

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aviv
        </Logo>
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem href="#" whileHover={{ scale: 1.05 }}>Home</MenuItem>
          <MenuItem href="#" whileHover={{ scale: 1.05 }}>About</MenuItem>
          <MenuItem href="#" whileHover={{ scale: 1.05 }}>Products</MenuItem>
          <MenuItem href="#" whileHover={{ scale: 1.05 }}>Contact</MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;