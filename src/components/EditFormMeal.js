import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './EditForm.css'




const EditFormMeal = (props) => {

    const navigate = useNavigate();
    const [food, setFood] = useState({
        id: props.id,
        name: props.name,
        meal: props.meal,
        calories: props.calories,
        img: props.img
    });
    const changeHandler = (e) => {
        setFood({...food, [e.target.name]: e.target.value})
    };

    const submitHandler = (e) => {
        
        const data = {
            name: food.name,
            meal: food.meal,
            calories: food.calories,
            img: food.img
        }

        axios
        .put(`http://localhost:4000/api/foods/${props.id}`, data)
        .then((res) => {
            navigate('/user-auth')
        })
        .catch((err) => {
            console.log(err)
        })
    };

  return (
    <div className="edit-page">
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name' placeholder={food.name}></input> <br/>         
            Meal: <input type='text' onChange={changeHandler} name='meal' placeholder={food.meal}></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories' placeholder={food.calories}></input> <br/>
            Image: <input type='text' onChange={changeHandler} name='image' placeholder={food.img}></input> <br/>
            
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  );
    

}



export default EditFormMeal;