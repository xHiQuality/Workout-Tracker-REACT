import React from 'react';
<<<<<<< HEAD
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
     
=======
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
      <Button className="button" type="submit" onClick={handleLogin}>
        {showLogin ? 'Stay logged out' : 'Login'}
      </Button>
      {showLogin && <Login />}
>>>>>>> main
    </div>
  );
};

export default Hdr;