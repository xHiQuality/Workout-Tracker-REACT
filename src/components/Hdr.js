import React from 'react';
import { useState } from 'react';

import './Hdr.css';
import Button from './Button';
import Login from './Login';

const Hdr = () => {

  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  }

  return (
    <div className="hdr">
      <h1>Workout Plus</h1>
      {/* <img src="images/workout-tracker--high-resolution-logo-transparent.png" alt='Workout Tracker + Logo'/> */}
      <Button className="button" type="submit" onClick={handleLogin}>
        {showLogin ? 'Stay logged out' : 'Login'}
      </Button>
      {showLogin && <Login />}
    </div>
  );
};

export default Hdr;