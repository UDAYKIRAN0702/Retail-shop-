import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()}Tsar IT Solutions. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
   
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '14px'
  }
};

export default Footer;
