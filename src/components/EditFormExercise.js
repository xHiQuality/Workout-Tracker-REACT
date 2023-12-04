import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import './EditForm.css'




const EditFormExercise = (props) => {
    
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({
        id: props.id,
        name: props.name,
        workout: props.workout,
        calories: props.calories,
    });
    const changeHandler = (e) => {
                
    };



    const submitHandler = (e) => {
        console.log(exercise.id)
        console.log('http://localhost:4000/api/exercises/'+exercise.id)
        
       e.preventDefault();
        // console.log(exercise);
        axios
        .put('http://localhost:4000/api/exercises/'+exercise.id, {
            name: exercise.name,
            workout: exercise.workout,
            calories: exercise.calories
        });
        navigate('/user-auth')
    };

    const updateList = () => {
        axios
            .get('http://localhost:4000/api/exercises', exercise)
            .then((res) => {
                console.log(res)
            });
    }
  return (
    <div className="edit-page">
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name' placeholder={exercise.name}></input> <br/>
            Workout: <input type='text' onChange={changeHandler} name='workout' placeholder={exercise.workout}></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories' placeholder={exercise.calories}></input> <br/>
            <button>Submit</button>
            
        </form>
    </div>
  );
}

export default EditFormExercise;