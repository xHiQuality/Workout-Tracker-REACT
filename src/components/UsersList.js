// import React from 'react';
// import './UsersList.css';
// import Food from './Food';
// import Workout from './Workout';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';



// function UserList({ users }) {
//  const foodUsers = users.filter((user) => user.meal !== user.calories);
//  const workoutUsers = users.filter((user) => user.workout !== user.burnedCalories);

//  return (
//     <div className="userlist">
//       <div className="grid-container">
//         {foodUsers.length > 0 && (
//             <Card>
//                 <h2>Food Information:</h2>
//                 <ul>
//                  {foodUsers.map((user, index) => (
//                     <li key={index}>
//                       <Food name={user.name} meal={user.meal} calories={user.calories} />
//                       <li key={index}>
//                         {/* <MealImage mealImage={user.mealImage} /> */}
//                       </li>
//                     </li>
//                   ))}
//                 </ul>
//             </Card>
//         )}

//         {workoutUsers.length > 0 && (
//             <Card className="user-card">
//                 <h2>Workout Information:</h2>
//                 <ul>
//                  {workoutUsers.map((user, index) => (
//                     <li key={index}>
//                       <Workout name={user.name} workout={user.workout} calories={user.burnedCalories} />
//                       <li key={index}>
//                         {/* <Image image={user.image} /> */}
//                       </li>
//                     </li>
//                   ))}
//                 </ul>
//             </Card>
//         )}
//       </div>
//     </div>
//  );
// }

// export default UserList;


// UserList.js
// UserList.js
import React from 'react';
import Food from './Food';
import Workout from './Workout';
import { Card } from 'react-bootstrap';
import './UsersList.css';

function UserList({ users }) {
  const foodUsers = users.filter((user) => user.meal !== user.calories);
  const workoutUsers = users.filter((user) => user.workout !== user.burnedCalories);

  return (
    <div className="userlist">
      <div className="grid-container">
        {foodUsers.length > 0 && (
          <Card className="user-card">
            <Card.Body>
              <h2>Food Information:</h2>
              {foodUsers.map((user, index) => (
                <Food key={index} name={user.name} meal={user.meal} calories={user.calories} />
              ))}
            </Card.Body>
          </Card>
        )}

        {workoutUsers.length > 0 && (
          <Card className="user-card">
            <Card.Body>
              <h2>Workout Information:</h2>
              {workoutUsers.map((user, index) => (
                <Workout key={index} name={user.name} workout={user.workout} calories={user.burnedCalories} />
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default UserList;
