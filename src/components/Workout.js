import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'; // Import the same CSS file used for Food component
import './Image.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Workout = (props) => {
  
  const deleteHandler = (e) => {

  }
  
  return (
    <Card className="custom-card">
      {/* <Card.Img
        variant="top"
        src={props.image}
        className="card-image"
      /> */}
      {/* https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D */}
      <Card.Body>
        <li key={props.id} className="user-item">
          <Card.Title>Exercise: {props.exercise}</Card.Title>
          <Card.Text>
            <h3>Workout: {props.workout}</h3>
            <h3>Calories: {props.calories}</h3>
            <h3>{props.img}</h3>

            {window.location.pathname === '/user-auth' && (
              <div className="button-container">
                  <Button type="submit" className="edit-button">
                    <Link to={"editExercise"} style={{ textDecoration: 'none'}}>
                      Edit
                    </Link>
                  </Button>
          
                  <button type='submit' className='delete-button' onClick={deleteHandler}>
                    Delete
                  </button>
                
              </div>
            )}
          </Card.Text>
        </li>
      </Card.Body>
    </Card>
  );
};

export default Workout;

