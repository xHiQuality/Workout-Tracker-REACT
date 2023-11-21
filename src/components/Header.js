import React from 'react';
import './Hdr.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className="hdr">
      <h1>Workout Tracker +</h1>
      <Button type="submit">
            <Link to="/">Log out</Link> 
        </Button>
    </div>
  );
};

export default Header;