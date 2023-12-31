import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';

import './Food.css'; // Import the same CSS file used for Food component
import './Card.css'
import './Image.css'
import Card from 'react-bootstrap/Card';
// import './EditForm.css'
import EditFormExercise from './EditFormExercise';
import axios from 'axios';

const Workout = (props, key) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showFormHandler = () => {
    setIsFormVisible(true)
  }
  
  const closeFormHandler = () => {
    setIsFormVisible(false)
  }

  const navigate = useNavigate();
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4000/api/exercises/${props.id}`)
      .then((res) => {
        navigate('/user-auth');
      })
      .catch((err) => {
        console.log("Error from Workout Delete click");
      });
      window.location.reload()
  };
  
  return (
    <Card className="custom-card">
       <Card.Img
        variant="top"
        src={props.image}
        className="card-image"
      />
      
      <Card.Body>
        <li key={key} className="user-item">
        <img src={props.img} alt=''></img>
          <Card.Title>Exercise: {props.exercise}</Card.Title>
          <Card.Text>
            <h3>Workout: {props.workout}</h3>
            <h3>Calories: {props.calories}</h3>
            
            {window.location.pathname === '/user-auth' && (
              <div className="button-container">
           

                  <button type="submit" className="edit-button" onClick={showFormHandler}>Edit</button>
                  
          
                  <button type='submit' className='delete-button' onClick={() => { deleteHandler(props.id)}}>
                    Delete
                  </button>
                
              </div>
            )}
            
          </Card.Text>
        </li>
      </Card.Body>
      {isFormVisible && <EditFormExercise id={props.id} name={props.name} workout={props.workout} calories={props.calories} img={props.img}/>}
      {isFormVisible && <button id="go-back" onClick={closeFormHandler}>Go Back</button>}
    </Card>
    
  );
};

export default Workout;

