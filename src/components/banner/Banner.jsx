import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BannerContainer = styled.div`
  height: 80vh;
  width: 100%;
  background-image: url('banner.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.4) 100%
  );
  z-index: 1;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Tag = styled(motion.p)`
   font-family: "Quicksand", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
  color: #555;
  margin-bottom: 1rem;
  text-transform: uppercase;
  -webkit-background-clip: text;
`;

const Title = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  font-weight: 700;
  color: #000000; /* Black */
  margin-bottom: 1.5rem;
  line-height: 1.2;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;


const Subtitle = styled(motion.p)`
  font-family: "Quicksand", sans-serif;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 500px;
`;

const CTAButton = styled(motion.button)`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 500;
  background: #921A40; 
  color: #FFFFFF; /* White text for contrast */
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 51, 102, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 51, 102, 0.4);
  }
`;


const DecorativeElement = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(212, 175, 55, 0.3); /* Gold */
  border-radius: 50%;
  right: -150px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

function Banner() {
  return (
    <BannerContainer>
      <Overlay />
      <ContentWrapper>
        <Tag
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Essential Items
        </Tag>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Beauty Inspired by Real Life
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Made using clean, non-toxic ingredients, our products are designed to enhance your natural beauty and fit seamlessly into your lifestyle.
        </Subtitle>
       <Link to={'/products'}>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Shop Now
          </CTAButton>
       </Link>
      </ContentWrapper>
      <DecorativeElement
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </BannerContainer>
  );
}

export default Banner;
