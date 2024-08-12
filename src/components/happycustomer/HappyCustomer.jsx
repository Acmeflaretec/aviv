import React from 'react';
import styled from 'styled-components';

const HappyCustomerSection = styled.section`
  padding: 60px 20px;
  background-color: #f7f9fc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #2c3e50;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CustomerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
`;

const CustomerCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
`;

const CustomerImage = styled.div`
  width: 100%;
  padding-top: 100%; // 1:1 Aspect ratio
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${CustomerCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CustomerInfo = styled.div`
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CustomerName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #34495e;
  font-weight: 600;
`;

const CustomerReview = styled.p`
  font-size: 1rem;
  color: #5d6d7e;
  line-height: 1.6;
  position: relative;
  padding-left: 20px;
  flex-grow: 1;

  &::before {
    content: '"';
    font-size: 3rem;
    color: #3498db;
    position: absolute;
    left: -10px;
    top: -20px;
    opacity: 0.3;
  }
`;

const HappyCustomer = () => {
  const customers = [
    {
      name: 'John Doe',
      review: 'I used your oil, and it\'s amazing. Since I delivered my baby, I had very bad hair fall, and my hair stopped growing. I tried many oils and home remedies, but all in vain. I thought nothing would ever work for me, but your hair oil proved me wrong. I love your product; my hair fall stopped completely. I can see new baby hairs all over. A big thank you to you!',
      image: 'cust1.jpeg', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      review: 'Your hair oil is awesome. I tried many hair products, and nothing worked for me. But yours is great. Thank you so much for creating such an effective product!',
      image: 'cust2.jpeg', // Replace with actual image URL
    },
    // Add more customer reviews as needed
  ];

  return (
    <HappyCustomerSection>
      <Container>
        <Title>Happy Customers</Title>
        <CustomerCards>
          {customers.map((customer, index) => (
            <CustomerCard key={index}>
              <CustomerImage>
                <img src={customer.image} alt={`${customer.name}`} />
              </CustomerImage>
              <CustomerInfo>
                {/* <CustomerName>{customer.name}</CustomerName> */}
                <CustomerReview>{customer.review}</CustomerReview>
              </CustomerInfo>
            </CustomerCard>
          ))}
        </CustomerCards>
      </Container>
    </HappyCustomerSection>
  );
};

export default HappyCustomer;