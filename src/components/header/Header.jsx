import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: #FFFFFF;
  width: 100%;
  z-index: 1000;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #D4AF37;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  img {
    max-width: 180px;
    height: auto;
  }
`;

const MenuItems = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  }
`;

const MenuItem = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #921A40;
    transition: width 0.3s ease-in-out;
  }

  &:hover, &.active {
    color: #921A40;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    border-bottom: 1px solid #eaeaea;
    
    &:last-child {
      border-bottom: none;
    }

    &::after {
      display: none;
    }

    &:hover, &.active {
      background-color: rgba(212, 175, 55, 0.1);
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #FF0000;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0)')};
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link to="/"><img src="logo.png" alt="logo" /></Link>
        </Logo>
        <MenuToggle onClick={toggleMenu} isOpen={isMenuOpen}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </MenuItem>
          <MenuItem to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </MenuItem>
          <MenuItem to="/products" className={location.pathname === '/products' ? 'active' : ''}>
            Products
          </MenuItem>
          <MenuItem to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
