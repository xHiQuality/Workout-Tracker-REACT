import React from 'react';

import './Hdr.css';
import Button from './Button';

const Hdr = () => {
  return (
    <div className="hdr">
     <h1>Workout Plus</h1>
     <Button>Login</Button>
    </div>
  );
};

export default Hdr;