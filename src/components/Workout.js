import React from 'react';
import './Food.css';
import CustomCard from './Card';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Workout = props => {
  return (
    <Card style={{ width: '18rem', border: '2px solid black', height: 'auto' }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <Card.Body>
        <li key={props.id} className="user-item">
          <Card.Title>Exercise:</Card.Title>
          <Card.Text>
            <h3>Name: {props.name}</h3>
            <h3>Workout: {props.workout}</h3>
            <h3>Calories: {props.calories}</h3>
            <Button variant="primary">Delete</Button>
          </Card.Text>
        </li>
      </Card.Body>
    </Card>
  );
};

export default Workout;
