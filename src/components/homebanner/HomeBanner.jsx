import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function HomeBanner() {
  return (
    <BannerContainer>
      <LargeCard
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CardContent>
          <CardTitle>Ethereal Glow</CardTitle>
          <CardText>
            Unveil your inner radiance with our signature collection of illuminating elixirs.
          </CardText>
          <CardButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Discover Magic
          </CardButton>
        </CardContent>
        <CardImage src="https://img.freepik.com/free-vector/makeup-realistic-composition_1284-18448.jpg?t=st=1722674853~exp=1722678453~hmac=a0b724d2b899294594af61ab31a57db906151010fa3291a245f614c22aca1f89&w=826" alt="Glowing skin" />
      </LargeCard>
      
      <SmallCardsContainer>
        <SmallCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SmallCardContent>
            <SmallCardTitle>Nature's Essence</SmallCardTitle>
            <SmallCardText>
              Botanical blends for timeless beauty.
            </SmallCardText>
            <SmallCardButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Explore
            </SmallCardButton>
          </SmallCardContent>
        </SmallCard>
        
        <SmallCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SmallCardContent>
            <SmallCardTitle>Lunar Rituals</SmallCardTitle>
            <SmallCardText>
              Nighttime renewal for your skin.
            </SmallCardText>
            <SmallCardButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Discover
            </SmallCardButton>
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
  padding: 40px;
  background: linear-gradient(135deg, #f6e5f5, #fff0f5);

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
  color: #8A2BE2;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: #4A4A4A;
  margin-bottom: 1.5rem;
  font-family: 'Lato', sans-serif;
  line-height: 1.6;
`;

const CardButton = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #FF1493, #FF69B4);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  align-self: flex-start;
  font-family: 'Montserrat', sans-serif;
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
  color: #FF69B4;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const SmallCardText = styled.p`
  font-size: 1rem;
  color: #4A4A4A;
  margin-bottom: 1rem;
  font-family: 'Lato', sans-serif;
`;

const SmallCardButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #8A2BE2, #9370DB);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
`;

export default HomeBanner;