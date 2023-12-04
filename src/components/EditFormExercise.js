import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import './EditForm.css'




const EditFormExercise = (props) => {
    
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({
        id: props.id,
        name: props.name,
        workout: props.workout,
        calories: props.calories,
        img: props.img
    });
    const changeHandler = (e) => {
        setExercise({...exercise, [e.target.name]: e.target.value})       
    };

    const submitHandler = (e) => {
            
        
        const data = {
            name: exercise.name,
            workout: exercise.workout,
            calories: exercise.calories,
            img: exercise.img
        }
        
        axios
        .put(`http://localhost:4000/api/exercises/${props.id}`, data)
        .then((res) => {
            navigate(`/user-auth`)
          })
          .catch((err) => {
            console.log(err)
          });
        
    };

  return (
    <div className="edit-page">
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name' placeholder={exercise.name}></input> <br/>
            Workout: <input type='text' onChange={changeHandler} name='workout' placeholder={exercise.workout}></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories' placeholder={exercise.calories}></input> <br/>
            Image: <input type='text' onChange={changeHandler} name='image' placeholder={exercise.img}></input> <br/>
            
            <button type='submit'>Submit</button>
            
        </form>
    </div>
  );
}

export default EditFormExercise;