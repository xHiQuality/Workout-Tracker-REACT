// import React, { useState } from 'react';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import './AddUser.css';
// import { Link } from 'react-router-dom';

// function AddUser({ onAddUser }) {
//  const [isFormVisible, setIsFormVisible] = useState(false); // New state variable
//  const [calories, setCalories] = useState('');
//  const [meal, setMeal] = useState('Breakfast'); // Default value set to 'Breakfast'
//  const [burnedCalories, setBurnedCalories] = useState('');
//  const [workout, setWorkout] = useState('Push'); // Default value set to 'Breakfast'
//  const [image, setImage] = useState('')
//  const [mealImage, setMealImage] = useState('')

//  const addUserHandler = (event) => {
//     event.preventDefault();

//     const newUser = {
//       meal: meal,
//       calories: calories,
//       image: image,
//       mealImage: mealImage,
//       workout: workout,
//       burnedCalories: burnedCalories
//     };

//     // Call the handler function to add the new user
//     onAddUser(newUser);

//     // Reset the form fields
//     setMeal('');
//     setCalories('');
//     setBurnedCalories('')
//     setImage('')
//     setMealImage('')
//     setWorkout('')
//     setIsFormVisible(false);

//  };

//  const showFormHandler = () => {
//     setIsFormVisible(true);
//  };

//  return (
//     <div>
//       <Button onClick={showFormHandler}>
//         <Link to="/user-auth">Add Entry</Link>
//       </Button>
//       {isFormVisible && (
//         <Card className="input">
//           <form onSubmit={addUserHandler}>
//             <label>Meal Image</label>
//             <input
//               id="mealImage"
//               type="string"
//               value={mealImage}
//               onChange={(e) => setMealImage(e.target.value)}
//             />

//             <label>Meal</label>
//             <select id="meal" value={meal} onChange={(e) => setMeal(e.target.value)}>
//               {['Breakfast', 'Lunch', 'Dinner'].map((option) => (
//                 <option key={option} value={option}>
//                  {option}
//                 </option>
//               ))}
//             </select>

//             <label>Calories</label>
//             <input
//               id="calories"
//               type="number"
//               value={calories}
//               onChange={(e) => setCalories(e.target.value)}
//             />

//             <label>Workout Image</label>
//             <input
//               id="image"
//               type="string"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//             />

//             <label>Workout</label>
//             <select id="meal" value={workout} onChange={(e) => setWorkout(e.target.value)}>
//               {['Push', 'Pull', 'Legs'].map((option) => (
//                 <option key={option} value={option}>
//                  {option}
//                 </option>
//               ))}
//             </select>

//             <label>Burned Calories</label>
//             <input
//               id="Burnedcalories"
//               type="number"
//               value={burnedCalories}
//               onChange={(e) => setBurnedCalories(e.target.value)}
//             />

//             <Button type="submit">Add Entry</Button>
//           </form>
//         </Card>
//       )}
//     </div>
//  );
// }

// export default AddUser;


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
      <Button onClick={showFormHandler}>
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

              <Button type="submit">Add Entry</Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default AddUser;
