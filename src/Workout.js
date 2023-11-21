import React from 'react';
import './components/Food.css';
import Card from './components/Card';

const Workout = props => {
    return (    
        <Card className="user-card"> 
        <li key={props.id} className="user-item">
        <div className="user-info">
            <h2>Exercise:</h2>
            <h2>Name: {props.name}</h2>
            <h3>Workout: {props.workout}</h3>
            <h3>Calories: {props.calories}</h3>
        </div>
        </li>
        </Card>
    )
}

export default Workout;
