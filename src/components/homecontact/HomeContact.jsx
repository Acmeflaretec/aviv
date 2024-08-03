import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function HomeContact() {
  return (
    <ContactSection>
      <ContactContainer>
        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading>Let's Create Beauty Together</Heading>
            <Subheading>
              Have questions or ideas? We're here to bring your vision to life.
            </Subheading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Reach Out
            </ContactButton>
          </motion.div>
        </ContentWrapper>
      </ContactContainer>
      <BackgroundElement1 />
      <BackgroundElement2 />
    </ContactSection>
  );
}

const ContactSection = styled.section`
  background: linear-gradient(135deg, #2c3e50, #34495e);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  text-align: center;
  color: #ecf0f1;
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(45deg, #e74c3c, #f39c12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: 'Lato', sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButton = styled(motion.button)`
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c3e50;
  background: linear-gradient(45deg, #e74c3c, #f39c12);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const BackgroundElement = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
`;

const BackgroundElement1 = styled(BackgroundElement)`
  width: 300px;
  height: 300px;
  background: #e74c3c;
  top: -100px;
  left: -100px;
`;

const BackgroundElement2 = styled(BackgroundElement)`
  width: 200px;
  height: 200px;
  background: #f39c12;
  bottom: -50px;
  right: -50px;
`;

export default HomeContact;