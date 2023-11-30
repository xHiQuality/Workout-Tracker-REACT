import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'; // Import the same CSS file used for Food component
import './Image.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { hover } from '@testing-library/user-event/dist/hover';

const Workout = (props) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
        className="card-image"
      />

      <Card.Body>
        <li key={props.id} className="user-item">
          <Card.Title>Exercise:</Card.Title>
          <Card.Text>
            <h3>Workout: {props.workout}</h3>
            <h3>Calories: {props.calories}</h3>

            {window.location.pathname === '/user-auth' && (
              <div className="button-container">
                  <Button type="submit" id="edit" className="edit-button">
                    <Link to={"edit"} style={{ textDecoration: 'none'}}>
                      Edit
                    </Link>
                  </Button>
          
                  <Button type="submit" id="delete" className="delete-button">
                    <Link to={"delete"} className='link' style={{ textDecoration: 'none'}}>
                      Delete
                    </Link>
                  </Button>
                
              </div>
            )}
          </Card.Text>
        </li>
      </Card.Body>
    </Card>
  );
};

export default Workout;

