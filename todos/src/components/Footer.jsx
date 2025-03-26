import React from 'react'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; 2024 Todos. All rights reserved.</p>
        <div style={linksStyle}>
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
          <a href="/terms" style={linkStyle}>Terms of Service</a>
          <a href="/contact" style={linkStyle}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  // position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linksStyle = {
  marginTop: '10px',
};

const linkStyle = {
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
};
