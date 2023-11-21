import React from 'react';
import './Image.css';
import Card from './Card';

const Image = props => {
    return (    
        <Card className="user-card"> 
        <li key={props.id} className="user-item">
        <div className="user-info">
           <img src={props.image}></img>
        </div>
        </li>
        </Card>
    )
}

export default Image;