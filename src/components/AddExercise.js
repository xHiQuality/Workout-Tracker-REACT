import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddUser.css';
import axios from 'axios';

const AddExercise = ({ onAddExercise }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({
        name: '',
        workout: '',
        calories: '',
    });
    const changeHandler = (e) => {
        setExercise({...exercise, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(exercise);

        axios
            .post('http://localhost:4000/api/exercises', exercise) 
            .then((res) => {
                setExercise({
                    name: '',
                    workout: '',
                    calories: '',
                });
                navigate('/user-auth');
            })
            .then((res) => console.log(res))
            .catch((err) => {
                console.log(err);
            });
    };

    const showFormHandler = () => {
        setIsFormVisible(true);
    };
    const closeFormHandler = () => {
      setIsFormVisible(false);
    };

  return (
    <div>
        <Button onClick={showFormHandler} id="main-add-entry">
        <Link to="/user-auth">Add Exercise</Link>
      </Button>
      {isFormVisible && (
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name'></input> <br/>
            Workout: <input type='text' onChange={changeHandler} name='workout'></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories'></input> <br/>
            <button>Submit</button>
            <button onClick={closeFormHandler}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default AddExercise;