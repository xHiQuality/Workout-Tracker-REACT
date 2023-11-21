import React from 'react';
import './Image.css';
import Card from './Card';

const MealImage = props => {
    return (    
        <Card className="user-card"> 
        <li key={props.id} className="user-item">
        <div className="user-info">
           <img src={props.mealImage}></img>
        </div>
        </li>
        </Card>
    )
}

export default MealImage;