import React, { useState } from 'react';
import Card from '../../Card';
import Button from '../../Button';
import './AddUser.css';

function AddWorkout({ onAddWorkout }) {

  const [isFormVisible, setIsFormVisible] = useState(false); // New state variable
  const [calories, setCalories] = useState('');
  const [workout, setWorkout] = useState('Push'); // Default value set to 'Breakfast'
  const [image, setImage] = userState('')

  const addUserHandler = (event) => {
    event.preventDefault();

    const newUser = {
      workout: workout,
      calories: calories,
      image: image
    };

    // Call the handler function to add the new user
    onAddWorkout(newUser);

    // Reset the form fields
    setWorkout('Push');
    setCalories('');
    setImage('')
   
    setIsFormVisible(false);

  };


  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  

  return (
    <div> 
      <Button onClick={showFormHandler}>Add Workout</Button>
        {isFormVisible && ( // Display the form only when isFormVisible is true



      <Card className="input">
        <form onSubmit={addUserHandler}>

        <label>Image</label>
          <input
            id="image"
            type="string"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
          
          
          <label>Calories</label>
          <input
            id="calories"
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          /> 
        
          <Button type="submit">Add Workot</Button>
        </form>
      </Card>
        )}
    </div>

  );
};

export default AddWorkout;



// AddWorkout.js

// import React, { useState } from 'react';
// import Card from './Card';
// import Button from './Button';
// // import './AddWorkout.css';

// function AddWorkout({ onAddWorkout }) {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [exerciseType, setExerciseType] = useState('Push');
//   const [caloriesBurned, setCaloriesBurned] = useState('');

//   const addWorkoutHandler = (event) => {
//     event.preventDefault();
//     const newWorkout = {
//       exerciseType: exerciseType,
//       caloriesBurned: caloriesBurned,
//     };

//     onAddWorkout(newWorkout);

//     // Reset the form fields
//     setExerciseType('Push');
//     setCaloriesBurned('');

//     // Hide the form
//     setIsFormVisible(false);
//   };

//   const showFormHandler = () => {
//     setIsFormVisible(true);
//   };

//   return (
//     <div>
//       <Button onClick={showFormHandler}>ADD WORKOUT</Button>
//       {isFormVisible && (
//         <Card className="input">
//           <form onSubmit={addWorkoutHandler}>
//             <label>Exercise Type</label>
//             <select id="exerciseType" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)}>
//               {['Push', 'Pull', 'Legs'].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//             <label>Calories Burned</label>
//             <input
//               id="caloriesBurned"
//               type="number"
//               value={caloriesBurned}
//               onChange={(e) => setCaloriesBurned(e.target.value)}
//             />
//             <Button type="submit">Add Workout</Button>
//           </form>
//         </Card>
//       )}
//     </div>
//   );
// }

// export default AddWorkout;