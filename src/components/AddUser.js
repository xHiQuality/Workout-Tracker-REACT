import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddUser.css';

function AddUser({ onAddUser }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [calories, setCalories] = useState('');
  const [meal, setMeal] = useState('Breakfast');
  const [burnedCalories, setBurnedCalories] = useState('');
  const [workout, setWorkout] = useState('Push');
  const [image, setImage] = useState('');
  const [mealImage, setMealImage] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUser = {
      meal: meal,
      calories: calories,
      image: image,
      mealImage: mealImage,
      workout: workout,
      burnedCalories: burnedCalories,
    };

    onAddUser(newUser);

    setMeal('');
    setCalories('');
    setBurnedCalories('');
    setImage('');
    setMealImage('');
    setWorkout('');
    setIsFormVisible(false);
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div>
      <Button onClick={showFormHandler} id="main-add-entry">
        <Link to="/user-auth">Add Entry</Link>
      </Button>
      {isFormVisible && (
        <Card className="input">
          <Card.Body>
            <Card.Title>Add Entry</Card.Title>
            <Form onSubmit={addUserHandler}>
              <Form.Group controlId="mealImage">
                <Form.Label>Meal Image</Form.Label>
                <Form.Control
                  type="text"
                  value={mealImage}
                  onChange={(e) => setMealImage(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="meal">
                <Form.Label>Meal</Form.Label>
                <Form.Control as="select" value={meal} onChange={(e) => setMeal(e.target.value)}>
                  {['Breakfast', 'Lunch', 'Dinner'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="calories">
                <Form.Label>Calories</Form.Label>
                <Form.Control
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Workout Image</Form.Label>
                <Form.Control
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="workout">
                <Form.Label>Workout</Form.Label>
                <Form.Control as="select" value={workout} onChange={(e) => setWorkout(e.target.value)}>
                  {['Push', 'Pull', 'Legs'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="burnedCalories">
                <Form.Label>Burned Calories</Form.Label>
                <Form.Control
                  type="number"
                  value={burnedCalories}
                  onChange={(e) => setBurnedCalories(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" id="addEntry">Add Entry</Button>
              <Button type="submit" id="cancel" onClick={showFormHandler}>Cancel</Button>
              
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default AddUser;
