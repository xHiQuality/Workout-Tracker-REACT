import React from 'react';
import './Food.css';
import Card from './Card';

const Food = props => {
    return (    
        <Card className="user-card"> 
        <li key={props.id} className="user-item">
        <div className="user-info">
            <h2>Food:</h2>
            <h3>Meal: {props.meal}</h3>
            <h3>Calories: {props.calories}</h3>
        </div>
        </li>
        </Card>
    )
}

export default Food;
