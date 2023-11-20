import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';
import { Link } from 'react-router-dom';

function AddUser({ onAddUser }) {

  const [isFormVisible, setIsFormVisible] = useState(false); // New state variable
  const [calories, setCalories] = useState('');
  const [meal, setMeal] = useState('Breakfast'); // Default value set to 'Breakfast'
  const [burnedCalories, setBurnedCalories] = useState('');
  const [workout, setWorkout] = useState('Push'); // Default value set to 'Breakfast'

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUser = {
      meal: meal,
      calories: calories,
      workout: workout, 
      burnedCalories: burnedCalories
    };

    // Call the handler function to add the new user
    onAddUser(newUser);

    // Reset the form fields
    setMeal('');
    setCalories('');
    setBurnedCalories('')
    setWorkout('')
    setIsFormVisible(false);

  };


  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  

  return (
    <div> 
      {/* <Button onClick={showFormHandler}>Add Entry</Button> */}
      {/* Router link within the button */}
      <Button onClick={showFormHandler}>
        <Link to="/user-auth">Add Entry</Link> 
      </Button>
        {isFormVisible && ( // Display the form only when isFormVisible is true

<Card className="input">
        <form onSubmit={addUserHandler}>
          
        <label>Meal</label>
          <select id="meal" value={meal} onChange={(e) => setMeal(e.target.value)}>
            {/* Create options for Breakfast, Lunch, and Dinner */}
            {['Breakfast', 'Lunch', 'Dinner'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          
          
          <label>Calories</label>
          <input
            id="calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          /> 
        
        <label>Workout</label>
          <select id="meal" value={workout} onChange={(e) => setWorkout(e.target.value)}>
            {/* Create options for Breakfast, Lunch, and Dinner */}
            {['Push', 'Pull', 'Legs'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label>Burned Calories</label>
          <input
            id="Burnedcalories"
            type="number"
            value={burnedCalories}
            onChange={(e) => setBurnedCalories(e.target.value)}
          /> 
 





          <Button type="submit">Add Entry</Button>
        </form>
      </Card>
        )}
    </div>

  );
};

export default AddUser;





























// import React, { useState } from 'react';
// import Card from './Card';
// import Button from './Button';
// import './AddUser.css';


// // The AddUser component is responsible for collecting user input data and sending it to the 
// // App component to add a new user. It also clears the input fields after submission.
// // useState is used to manage the state of input fields (name, age, image, and major).
// // addUserHandler function is called when the form is submitted. It collects the input values,
// //  creates a new user object, and calls the onAddUser function (passed as a prop) to send 
// //  the new user data to the App component.


// function AddUser({ onAddUser }) {

//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [image, setImage] = useState('');
//   const [major, setMajor] = useState('');

//   const addUserHandler = (event) => {
//     event.preventDefault();

//     const newUser = {
//       name: name,
//       age: age,
//       image: image,
//       major: major,
//     };

//     // Call the handler function to add the new user
//     onAddUser(newUser);

//     // Reset the form fields
//     setName('');
//     setAge('');
//     setImage('');
//     setMajor('');
//   };



//   return (
//     <div> 
//       <Card className="input">
//         <form onSubmit={addUserHandler}>
//           <label>Username</label>
//           <input
//             id="username"
//             type="text"
//             value={name} onChange={(e) => setName(e.target.value)}
//           />
//           <label>Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             value={age} onChange={(e) => setAge(e.target.value)} 
//           />
//           <label>Link to image</label>
//           <input
//             id="img"
//             type="text"
//             placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}
//           />
//           <label>Major</label>
//           <input
//             id="major"
//             type="text"
//             placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} 
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>

//     </div>












//   );
// };

// export default AddUser;
