import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <BannerContainer>
      <LargeCard
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CardContent>
          <CardTitle className='text-start'>Embrace Natural Beauty</CardTitle>
          <CardText>
            Discover our signature collection of nature-inspired skincare products.
          </CardText>
          <Link to={'/products'}>
            <CardButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Explore Our Products
            </CardButton>
          </Link>
        </CardContent>
        <CardImage src="product1.jpeg" alt="Natural skincare products" />
      </LargeCard>
      
      <SmallCardsContainer>
        <SmallCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SmallCardContent>
            <SmallCardTitle>Herbal Infusions</SmallCardTitle>
            <SmallCardText>
              Harness the power of botanicals for timeless beauty.
            </SmallCardText>
            <Link to={'/products'}>
              <SmallCardButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Discover More
              </SmallCardButton>
            </Link>
          </SmallCardContent>
        </SmallCard>
        
        <SmallCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SmallCardContent>
            <SmallCardTitle>Nightly Rejuvenation</SmallCardTitle>
            <SmallCardText>
              Revitalize your skin with our nourishing night care rituals.
            </SmallCardText>
            <Link to={'/products'}>
              <SmallCardButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More
              </SmallCardButton>
            </Link>
          </SmallCardContent>
        </SmallCard>
      </SmallCardsContainer>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  background: linear-gradient(135deg, #ffffff, #f8d7da); /* White to Baby Pink */

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    height: 600px;
  }
`;

const LargeCard = styled(motion.div)`
  flex: 2;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CardContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const CardTitle = styled.h2`
  font-size: 2.5rem;
  color: #000000; /* Black */
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: #4A4A4A;
  margin-bottom: 1.5rem;
  font-family: "Quicksand", sans-serif;
  line-height: 1.6;
`;

const CardButton = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: #921A40; /* Deep Wine */
  border: none;
  border-radius: 50px;
  cursor: pointer;
  align-self: flex-start;
  font-family: "Quicksand", sans-serif;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 50%;
    height: auto;
  }
`;

const SmallCardsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SmallCard = styled(motion.div)`
  flex: 1;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const SmallCardContent = styled.div`
  text-align: center;
`;

const SmallCardTitle = styled.h3`
  font-size: 1.8rem;
  color: #000000; /* Black */
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const SmallCardText = styled.p`
  font-size: 1rem;
  color: #4A4A4A;
  margin-bottom: 1rem;
  font-family: "Quicksand", sans-serif;
`;

const SmallCardButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background: #921A40; /* Deep Wine */
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
`;

export default HomeBanner;
