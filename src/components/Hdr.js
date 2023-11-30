import React from 'react';
import { useState } from 'react';

import './Hdr.css';
import Button from './Button';
import Login from './Login';
import trackerLogo from './images/workout-tracker--high-resolution-logo-transparent.png';

const Hdr = () => {

  console.log(trackerLogo)

  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  }

  return (
    <div className="hdr">
      <div>
        <img src='./static/media/workout-tracker--high-resolution-logo-transparent.ed2d488200da2f997557.png' alt='logo' className='logo'/> 
        <h1>Workout Tracker +</h1>
      </div>
      <Button className="button" type="submit" onClick={handleLogin}>
        {showLogin ? 'Stay logged out' : 'Login'}
      </Button>
      {showLogin && <Login />}
    </div>
  );
};

export default Hdr;