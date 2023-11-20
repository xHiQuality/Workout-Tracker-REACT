import React from 'react';
import './Hdr.css';
import Button from './Button';
import Login from './Login';
import { useState } from 'react';

const Hdr = ({onLogin}) => {

  const handleLoginClick = () => {
    onLogin();
  };

  return (
    <div className="hdr">
     <h1>Workout Plus</h1>
     <Button type="submit" onClick={handleLoginClick}>Login</Button>
     
    </div>
  );
};

export default Hdr;