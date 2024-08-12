import React from 'react';
import './WhatsAppButton.css'; // Import the CSS for styling

const WhatsAppButton = () => {
  const phoneNumber = '+917511140081'; // Replace with your phone number in international format

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // You can replace this with a local file path
        alt="WhatsApp Logo"
        className="whatsapp-logo"
      />
    </a>
  );
};

export default WhatsAppButton;
