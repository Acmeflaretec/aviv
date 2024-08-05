import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <AboutSection>
      <ContentWrapper>
        <LeftColumn>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <Heading>Embrace Natural Beauty</Heading>
          <Subtitle>Empowerment Through Sustainable Skincare</Subtitle>
          <Description>
              Welcome to AVIV where beauty meets nature. We are a cosmetic company dedicated to providing high-quality, natural, and sustainable products that nourish and enhance your beauty. Our mission is to empower individuals to embrace their unique beauty while promoting a healthier planet.
          </Description>

          </motion.div>
          <Stats>
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatItem>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              </motion.div>
            ))}
          </Stats>
        </LeftColumn>
        <RightColumn>
          <ImageGrid>
            {imageData.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <GridImage src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </ImageGrid>
        </RightColumn>
      </ContentWrapper>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background: linear-gradient(135deg, #ffffff, #fff5e6);
  padding: 100px 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: #FF0000; /* Red */
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #D4AF37; /* Gold */
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4A4A4A;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  font-family: 'Lato', sans-serif;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #FF0000; /* Red */
  font-family: 'Playfair Display', serif;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #4A4A4A;
  font-family: 'Montserrat', sans-serif;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const GridImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const statsData = [
  { number: '98%', label: 'Natural Ingredients' },
  { number: '50+', label: 'Unique Formulas' },
  { number: '1M+', label: 'Happy Customers' },
];

const imageData = [
  { src: 'https://cdn.pixabay.com/photo/2019/03/19/09/26/essential-oil-4065187_640.jpg', alt: 'Rare botanical ingredients' },
  { src: 'https://cdn.pixabay.com/photo/2016/07/24/22/48/essential-oils-1539457_640.jpg', alt: 'Luxury skincare product' },
  { src: 'https://cdn.pixabay.com/photo/2019/02/18/17/26/natural-cosmetics-4004909_1280.jpg', alt: 'Woman with glowing skin' },
  { src: 'https://cdn.pixabay.com/photo/2016/06/03/16/03/essential-oils-1433694_640.jpg', alt: 'Advanced skincare research' },
];

export default HomeAbout;
