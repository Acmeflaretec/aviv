import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Product.css';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const dummyProducts = [
          { id: 1, name: 'Tresses Hair Oil', price: 320, image: 'product1.jpeg' },
        ];
        setProducts(dummyProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleWhatsAppClick = () => {
    navigate('/productdetails')
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
   <>
        <Header />
      <div className="product-page">
        
        <Container className="py-5">
          <motion.h1 
            className="text-center mb-5 page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Premium Products
          </motion.h1>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {products.map((product) => (
                  <Col key={product.id}>
                    <motion.div variants={itemVariants}>
                      <Card className="h-100 shadow product-card">
                        <div className="product-image-container">
                          <Card.Img 
                            variant="top" 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                          />
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="product-title">{product.name}</Card.Title>
                          <Card.Text className="text-muted mb-4 product-price">
                            ₹{product.price.toFixed(2)}
                          </Card.Text>
                          <Button 
                            variant="success" 
                            className="mt-auto whatsapp-button"
                            onClick={handleWhatsAppClick}
                          >
                            {/* <i className="fab fa-whatsapp me-2"></i>
                            Contact on WhatsApp */}
                            Know More
                          </Button>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          )}
        </Container>
  
      </div>
        <Footer />
   </>
  );
}

export default Product;