// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <h3>Your Company Name</h3>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div style={rightSectionStyle}>
          <ul style={listStyle}>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <div style={socialIconsStyle}>
            <Link href="https://facebook.com">Facebook</Link>
            <Link href="https://twitter.com">Twitter</Link>
            <Link href="https://linkedin.com">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black',
  color: '#fff',
  padding: '50px 0', // Increased padding for a larger footer
  textAlign: 'center',
  borderTop: '3px solid #444',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const leftSectionStyle = {
  marginBottom: '20px',
};

const rightSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: '10px 0',
  display: 'flex',
  gap: '20px',
};

const socialIconsStyle = {
  marginTop: '20px',
  display: 'flex',
  gap: '20px',
};

export default Footer;
