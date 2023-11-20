import React from 'react';
import { useState } from 'react';
import './Hdr.css';
import Button from './Button';

const Hdr = ({ onLogin }) => {

  const [isFormVisible, setIsFormVisible] = useState(false); // New state variable

  return (
    <div className="hdr">
     <h1>Workout Plus</h1>
     <Button>Login</Button>
    </div>
  );
};

export default Hdr;