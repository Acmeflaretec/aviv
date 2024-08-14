import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactWrapper = styled.div`
  background-color: #f8f9fa;
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
  background-color: #921A40;
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8c193b;
    color: white;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid #921A40;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbx6xQwVrOeu_iJX_ie9wfZrdvgrc2KsH5oCRuQIt5oMRSorTnUmQbPxaL-pGa6IzqeiVQ/exec';
    

    const reqBody  = new FormData()
    reqBody.append('Name', formData.name)
    reqBody.append('Email', formData.email)
    reqBody.append('Subject', formData.subject)
    reqBody.append('Message', formData.message)
    reqBody.append('Date',new Date().toDateString())
    fetch(scriptUrl, {
      method: 'POST',
      body: reqBody,
      mode: 'no-cors'
    })
    .then(response => {
      console.log('Response:', response);
      setIsLoading(false);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); 
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
      alert('Error submitting form. Please try again.');
    });
  };

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
                <ul className="list-unstyled">
                  <li className="mb-3 text-start">
                    <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                    Ayyanthole, Thrissur 680003
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-envelope-fill me-2 text-danger"></i> 
                    info@avivcosmetics.online
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-telephone-fill me-2 text-danger"></i> 
                    +917511140081
                  </li>
                </ul>
              </ContactInfo>
            </div>
            <div className="col-lg-6">
              <ContactForm onSubmit={handleSubmit} noValidate>
                <h4 className="mb-4">Send Us a Message</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <SubmitButton type="submit" className="btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <LoadingSpinner />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </SubmitButton>
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
