import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1>About Our Brand</h1>
            <div className="decorative-line"></div>
          </div>
        </section>

        <section className="story-section">
          <div className="container">
            <h2>Our Story</h2>
            <div className="story-content text-start">
              <p>
              Welcome to AVIV where beauty meets nature. We are a cosmetic company dedicated to providing high-quality, natural, and sustainable products that nourish and enhance your beauty. Our mission is to empower individuals to embrace their unique beauty while promoting a healthier planet.
              </p>
              <p>
              Our products are crafted with love and care, using only the finest, cruelty-free ingredients sourced from nature. From skincare to haircare, our range is designed to cater to diverse needs and preferences. We believe in transparency, so you can trust what you put on your skin.
              Join our journey towards a more beautiful, sustainable future. Explore our products, and discover the power of natural beauty.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">✧</div>
                <h3>Luxury</h3>
                <p>We craft each product with meticulous attention to detail, ensuring a luxurious experience.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✦</div>
                <h3>Innovation</h3>
                <p>Our team of experts continuously push the boundaries of cosmetic science.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">❖</div>
                <h3>Integrity</h3>
                <p>We uphold the highest standards of ethical practices in all aspects of our business.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✵</div>
                <h3>Sustainability</h3>
                <p>Our commitment to the environment is reflected in our eco-friendly initiatives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
        <div className="container">
            <h2>Embrace Natural Beauty</h2>
            <p>Explore our range of sustainable, high-quality cosmetics and enhance your unique beauty naturally.</p>
            <Link to={'/products'} className="cta-button">Discover Our Collection</Link>
        </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default About;