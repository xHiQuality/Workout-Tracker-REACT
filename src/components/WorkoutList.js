// // WorkoutList.js

// import React from 'react';
// import Card from './Card';

// function WorkoutList({ workouts }) {
//   return (
//     <Card className="workout-card">
//       <div>
//         <h2>Workout List</h2>
//         <ul>
//           {workouts.map((workout, index) => (
//             <li key={index}>
//               <p>Exercise Type: {workout.exerciseType}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Card>
//   );
// }

// export default WorkoutList;

import React from 'react';
import Workout from './Workout';
import { Card } from 'react-bootstrap';
import './UsersList.css';

function WorkoutList({ users }) {
    const workoutUsers = users.filter((user) => user.workout !== user.burnedCalories);

  return (
    <div className="userlist">
      <div className="grid-container">
        {workoutUsers.length > 0 && (
          <Card className="user-card">
            <Card.Body>
              <h2>Workout Information:</h2>
              {workoutUsers.map((user, index) => (
                <Workout id={user._id} name={user.name} workout={user.workout} calories={user.calories} img={user.img}/>
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default WorkoutList;
