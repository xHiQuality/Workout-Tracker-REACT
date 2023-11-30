import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';
import Card from './Card';
import Button from './Button';

const Workout = props => {
    return (    
        <Card className="user-card"> 
        <li key={props.id} className="user-item">
        <div className="user-info">
            <h2>Exercise:</h2>

            {window.location.pathname === '/user-auth' && (
                <Link to ='/*'>
                    <Button type = 'submit' id = 'edit'>
                        Edit
                    </Button>
                </Link>
            )}

            <h3>Workout: {props.workout}</h3>
            <h3>Calories: {props.calories}</h3>
        </div>
        </li>
        </Card>
    )
}

export default Workout;