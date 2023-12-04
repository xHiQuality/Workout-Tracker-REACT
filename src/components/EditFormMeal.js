import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './EditForm.css'




const EditFormMeal = () => {

    const navigate = useNavigate();
    const [food, setFood] = useState({
        name: '',
        meal: '',
        calories: '',
    });
    const [foods, setFoods] = useState([]);
    const changeHandler = (e) => {
        
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(food);

        // axios
        //     .post('http://localhost:4000/api/foods', food) 
        //     .then((res) => {
        //         setFood({
        //             name: '',
        //             meal: '',
        //             calories: '',
        //         });
        //         navigate('/user-auth');
        //     })
        //     .then((res) => console.log(res))
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };

  return (
    <div className="edit-page">
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name'></input> <br/>
            Meal: <input type='text' onChange={changeHandler} name='meal'></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories'></input> <br/>
            <button>Submit</button>
        </form>
        <button id="go-back"><Link to={"/user-auth"}>Go Back</Link></button>
    </div>
  );
    

}



export default EditFormMeal;