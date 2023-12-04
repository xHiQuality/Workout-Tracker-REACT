import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddUser.css';
import axios from 'axios';

const AddFood = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const navigate = useNavigate();
    const [food, setFood] = useState({
        name: '',
        meal: '',
        calories: '',
        img: '',
        dbId: '',
    });

    // const [foods, setFoods] = useState([]);
    const changeHandler = (e) => {
        setFood({...food, [e.target.name]: e.target.value});
    };
    
    
    const submitHandler = (e) => {
      e.preventDefault();
      // console.log(food);

      axios
          .post('http://localhost:4000/api/foods', food) 
          .then((res) => {
              // Log the _id from the MongoDB document
              const a1 = res.data.food
              console.log('Inserted document ID:', res.data);
              food.dbId = a1._id

              setFood({
                  name: '',
                  meal: '',
                  calories: '',
                  img: '',
              });
              navigate('/user-auth');
          })
          .catch((err) => {
              console.log(err);
          });
  
      // window.location.reload();
      closeFormHandler();
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
        <Link to="/user-auth">Add Food</Link>
      </Button>
      <food dbId={food.dbId}/>
      {isFormVisible && (
        <form onSubmit={submitHandler}>
            Name: <input type='text' onChange={changeHandler} name='name'></input> <br/>
            Meal: <input type='text' onChange={changeHandler} name='meal'></input> <br/>
            Calories: <input type='Number' onChange={changeHandler} name='calories'></input> <br/>
            Image URL: <input type='text' onChange={changeHandler} name='img'></input> <br/>
            <button>Submit</button>
            <button onClick={closeFormHandler}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default AddFood;

