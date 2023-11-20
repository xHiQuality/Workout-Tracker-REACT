import './Summary.css'
import ProgressBar from './ProgressBar';
import React from 'react';

const Summary = () => {
    return (
        <div className="summary">
            <h1>Summary</h1>
            <ul>
                <li>Calorie Goal: 
                    <ProgressBar
                        percentage="30"
                    />
                </li>
                <li>Body weight: </li>
                <li>Height: </li>
            </ul>  
        </div>
    );
}

export default Summary;