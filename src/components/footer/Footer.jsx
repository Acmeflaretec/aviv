import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <img src="logo.png" alt="BeautyGlow logo" width={150} />
          </FooterLogo>
          <FooterTagline>Enhance Your Natural Beauty</FooterTagline>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <nav>
            <Link to={'/'} className='text-decoration-none'>
              <FooterLink>Home</FooterLink>
            </Link>
            <Link to={'/products'} className='text-decoration-none'>
              <FooterLink>Products</FooterLink>
            </Link>
            <Link to={'/about'} className='text-decoration-none'>
              <FooterLink>About Us</FooterLink>
            </Link>
            <Link to={'/contact'} className='text-decoration-none'>
              <FooterLink>Contact</FooterLink>
            </Link>
          </nav>
        </FooterSection>

        {/* <FooterSection>
          <FooterHeading>Customer Care</FooterHeading>
          <nav>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Shipping & Returns</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </nav>
        </FooterSection> */}

        <FooterSection>
          <FooterHeading>Newsletter</FooterHeading>
          <NewsletterText>Stay updated with our latest offers and products.</NewsletterText>
          <NewsletterForm aria-label="Newsletter Subscription">
            <NewsletterInput type="email" placeholder="Enter your email" aria-label="Email for newsletter" required />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <Copyright>&copy; 2024 Aviv. All rights reserved.</Copyright>
        <Copyright>Designed by <Link className='text-decoration-none' target='_blank' to={'https://www.acmeflare.in/'}>Acmeflare</Link> </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #f8d7da; /* Baby Pink */
  color: #000; /* Black text color */
  padding: 60px 0 20px;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.section`
  flex: 1 1 200px;
  margin-bottom: 30px;
  min-width: 200px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 10px;
`;

const FooterTagline = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #000;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #921A40; /* Deep Wine */
  }
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: #921A40; /* Deep Wine */
`;

const FooterLink = styled.a`
  display: block;
  color: #000;
  text-decoration: none;
  margin-bottom: 8px;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #921A40; /* Deep Wine */
  }
`;

const NewsletterText = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const NewsletterInput = styled.input`
  flex: 1 1 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const NewsletterButton = styled.button`
  background-color: #921A40; /* Deep Wine */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7d0f32; /* Darker Deep Wine */
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

const Copyright = styled.p`
  font-size: 12px;
`;

export default Footer;
