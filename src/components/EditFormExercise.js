import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import './EditForm.css'



const EditFormExercise = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({
        name: '',
        workout: '',
        calories: '',
    });
    const changeHandler = (e) => {
        
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(exercise);

    //     axios
    //         .post('http://localhost:4000/api/exercises', exercise) 
    //         .then((res) => {
    //             setExercise({
    //                 name: '',
    //                 workout: '',
    //                 calories: '',
    //             });
    //             navigate('/user-auth');
    //         })
    //         .then((res) => console.log(res))
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //    closeFormHandler();
    };

    const updateList = () => {
        axios
            .get('http://localhost:4000/api/exercises', exercise)
            .then((res) => {
                console.log(res)
            });
    }

    const showFormHandler = () => {
        setIsFormVisible(true);
    };
    const closeFormHandler = () => {
      setIsFormVisible(false);
    };

  return (
    <div className="edit-page">
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name'></input> <br/>
            Workout: <input type='text' onChange={changeHandler} name='workout'></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories'></input> <br/>
            <button>Submit</button>
            
        </form>
        <button id="go-back"><Link to={"/user-auth"}>Go Back</Link></button>
    </div>
  );
}

export default EditFormExercise;