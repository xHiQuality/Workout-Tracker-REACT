import React from 'react';
import './Hdr.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  const buttonStyle = {
    // backgroundColor: '#4CAF50', // Background color of the button
    backgroundColor: 'black',
    color: 'white', // Text color of the button
    border: 'none', // Remove button border if needed
    padding: '10px 20px', // Optional: Add padding to the button
    borderRadius: '5px', // Optional: Add border-radius for rounded corners
  };

  return (
    <div className="hdr">
      <h1>Workout Tracker +</h1>
      <h2>Welcome, Cason!</h2>
      <Button type="submit" style={buttonStyle}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Log out</Link>
      </Button>
    </div>
  );
};

export default Header;
