import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = (props) => {
 const classes = 'custom-card ' + props.className;
  
 return (
    <Card className={classes}>
      {props.children}
    </Card>
 );
};

export default CustomCard;