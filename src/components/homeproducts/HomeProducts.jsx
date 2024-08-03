import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProductSection = styled.section`
  background: linear-gradient(135deg, #ffffff, #fff1e6);
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
`;

const ProductContainer = styled(motion.div)`
  display: flex;
  max-width: 1200px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GoldOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,215,0,0.2), rgba(255,215,0,0));
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ProductName = styled.h2`
  font-size: 2.5rem;
  color: #8B0000;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  color: #8B0000;
  font-weight: bold;
`;

const BuyButton = styled(motion.button)`
  background: linear-gradient(45deg, #8B0000, #FF4500);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 2rem;
  align-self: flex-start;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 1.5rem;
`;

const CardName = styled.h3`
  font-size: 1.2rem;
  color: #8B0000;
  margin-bottom: 0.5rem;
`;

const CardPrice = styled.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
`;

// Sample product data
const products = [
  {
    id: 1,
    name: "Ethereal Glow Elixir",
    description: "Indulge in the magic of our Ethereal Glow Elixir, a luxurious blend of rare botanical oils. This transformative serum nourishes your skin with radiance, leaving it soft, supple, and illuminated. Infused with golden particles, it imparts a subtle, celestial shimmer for a truly ethereal glow.",
    price: 129.99,
    image: "https://img.freepik.com/free-photo/front-view-oil-made-from-green-plant_23-2148799508.jpg?w=740&t=st=1722674772~exp=1722675372~hmac=5710cbd08290c2120e8001d3f3292c63ebc907c2a5ed8e44cef971b8ffff1478"
  }
  // Add more products here if needed
];

function HomeProducts() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const SingleProductView = () => (
    <ProductContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ImageSection>
        <ProductImage src={selectedProduct.image} alt={selectedProduct.name} />
        <GoldOverlay />
      </ImageSection>
      <InfoSection>
        <ProductName>{selectedProduct.name}</ProductName>
        <ProductDescription>{selectedProduct.description}</ProductDescription>
        <ProductPrice>${selectedProduct.price.toFixed(2)}</ProductPrice>
        <BuyButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience the Glow
        </BuyButton>
      </InfoSection>
    </ProductContainer>
  );

  const MultipleProductsView = () => (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          onClick={() => setSelectedProduct(product)}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CardImage src={product.image} alt={product.name} />
          <CardInfo>
            <CardName>{product.name}</CardName>
            <CardPrice>${product.price.toFixed(2)}</CardPrice>
          </CardInfo>
        </ProductCard>
      ))}
    </ProductGrid>
  );

  return (
    <ProductSection>
      <AnimatePresence>
        {products.length === 1 ? <SingleProductView /> : <MultipleProductsView />}
      </AnimatePresence>
    </ProductSection>
  );
}

export default HomeProducts;