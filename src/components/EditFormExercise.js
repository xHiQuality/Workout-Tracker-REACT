import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        img: props.img
    });
    const changeHandler = (e) => {
        setExercise({...exercise, [e.target.name]: e.target.value})       
    };

    const {id} = exercise.id
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/exercises/${id}`)
        .then((res) => {
            setExercise({
                name: res.data.name,
                workout: res.data.workout,
                calories: res.data.calories,
                img: res.data.img
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const submitHandler = (e) => {
        
        
        
        
        console.log(exercise.id)
        console.log('http://localhost:4000/api/exercises/'+exercise.id)
        
        const data = {
            name: exercise.name,
            workout: exercise.workout,
            calories: exercise.calories,
            img: exercise.img
        }

       //e.preventDefault();
        // console.log(exercise);
        axios
        .put(`http://localhost:4000/api/exercises/${id}`, data)
        .then((res) => {
            navigate(`/user-auth/${id}`)
          });
            //navigate('/user-auth');
        
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