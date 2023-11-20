import React, { useState } from 'react';

import './WorkoutForm.css';

const WorkoutForm = (props) => {

    const initCalories = [
        {
            chest: 0,
            back: 0,
            shoulders: 0,
            triceps: 0,
            biceps: 0,
            legs: 0
        }
    ]


    const [calories,setCalories] = useState({
        chest: '',
        back: '',
        shoulders:'',
        triceps:'',
        biceps:'',
        legs:''
    })

    return (
        <div className="workout-form">
            
            <div className="titles">
                <div>
                    <h1>Workouts</h1>
                    <ul id="workout-types">
                        <li>Chest</li>
                        <li>Back</li>
                        <li>Shoulders</li>
                        <li>Triceps</li>
                        <li>Biceps</li>
                        <li>Legs</li>
                    </ul>
                </div>
                <div className="forms">
                    <h1>Calories</h1>
                    <ul>
                    <li>
                    <input id="chest"></input>
                    </li>
                    <li>
                    <input id="back"></input>
                    </li>
                    <li>
                    <input id="shoulders"></input>
                    </li>
                    <li>
                    <input id="triceps"></input>
                    </li>
                    <li>
                    <input id="biceps"></input>
                    </li>
                    <li>
                    <input id="legs"></input>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkoutForm;