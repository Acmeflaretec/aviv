import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  font-family: 'Arial', sans-serif;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  min-width: 300px;
  position: sticky;
  top: 2rem; /* Keeps it below the header */
  height: fit-content;

  @media (max-width: 768px) {
    position: static;
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel .slide img {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 1rem; /* To avoid the scrollbar issue */

  @media (max-width: 768px) {
    max-height: none;
  }
`;

const ProductName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #e53935;
  margin-bottom: 1rem;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  font-size: 1.2rem;
  color: ${(props) => (props.filled ? '#ffc107' : '#ccc')};
`;

const RatingCount = styled.span`
  margin-left: 0.5rem;
  color: #666;
`;

const ProductDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
`;

const ProductFeatures = styled.div`
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FeatureList = styled.ul`
  padding-left: 1.5rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
`;

const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

function ProductInfo() {
  const product = {
    name: 'Tresses Hair Oil',
    price: 320,
    rating: 4,
    ratingCount: 1024,
    description:
      'Unlock the secret to healthy, beautiful hair with Tresses Hair Oil, designed for intense growth and dandruff control. This ayurvedic formula features 44 powerful herbs, including Chaulmoogra and Vetiver, to nourish your scalp and strengthen your hair. Experience the natural benefits of Ayurveda and transform your hair into a symbol of strength and vitality with Tresses.',
    features: [
      'Enriched with 44 Ayurvedic herbs',
      'Promotes intense hair growth',
      'Effective dandruff control',
      'Nourishes and strengthens hair roots',
      'Contains Chaulmoogra and Vetiver for scalp health',
      'Free from harmful chemicals and additives',
    ],
    images: ['product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg'],
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you provide more information?`);
    const whatsappURL = `https://wa.me/1234567890?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Header />
      <ProductContainer>
        <ImageSection>
          <StyledCarousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${product.name} - view ${index + 1}`} />
              </div>
            ))}
          </StyledCarousel>
        </ImageSection>
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>₹{product.price}</ProductPrice>
          <ProductRating>
            {[...Array(5)].map((_, index) => (
              <Star key={index} filled={index < product.rating}>
                ★
              </Star>
            ))}
            <RatingCount>({product.ratingCount} reviews)</RatingCount>
          </ProductRating>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductFeatures>
            <FeatureTitle className='text-start'>Key Benefits:</FeatureTitle>
            <FeatureList>
              {product.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </ProductFeatures>
          <AddToCartButton onClick={handleWhatsAppClick}>
            <i className="fab fa-whatsapp me-2"></i>
            Contact on WhatsApp
          </AddToCartButton>
        </ProductDetails>
      </ProductContainer>
      <Footer />
    </>
  );
}

export default ProductInfo;
