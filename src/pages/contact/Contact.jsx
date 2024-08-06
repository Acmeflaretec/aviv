import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactWrapper = styled.div`
  background-color: #f8f9fa;
`;

const ContactHeading = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  
  // &:after {
  //   content: '';
  //   display: block;
  //   width: 50px;
  //   height: 3px;
  //   background-color: #e74c3c;
  //   margin: 15px auto 0;
  // }
`;

const ContactInfo = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  background-color: #e74c3c;
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

function Contact() {
  return (
    <div>
      <Header />
      <ContactWrapper className='py-5'>
      <motion.h1 
            className="text-center mb-5 page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <ContactInfo className='text-start'>
                <h4 className="mb-4">Get in Touch</h4>
                <p className='text-start'>
                  We'd love to hear from you! If you have any questions or need assistance, 
                  please don't hesitate to reach out.
                </p>
                <ul className="list-unstyled ">
                  <li className="mb-3 text-start">
                  <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                  123 Beauty Lane, Glow City, BC 12345
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-envelope-fill me-2 text-danger"></i> 
                    info@beautyglow.com
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i> 
                    +1 (234) 567-8900
                  </li>
                </ul>
              </ContactInfo>
            </div>
            <div className="col-lg-6">
              <ContactForm>
                <h4 className="mb-4">Send Us a Message</h4>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <SubmitButton type="submit" className="btn">Send Message</SubmitButton>
              </ContactForm>
            </div>
          </div>
        </div>
      </ContactWrapper>
      <Footer />
    </div>
  );
}

export default Contact;