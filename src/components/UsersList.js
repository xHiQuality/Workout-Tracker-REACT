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
                <Food key={index} name={user.name} meal={user.meal} calories={user.calories} mealImage={user.mealImage} />
              ))}
            </Card.Body>
          </Card>
        )}

        {workoutUsers.length > 0 && (
          <Card className="user-card">
            <Card.Body>
              <h2>Workout Information:</h2>
              {workoutUsers.map((user, index) => (
                <Workout workout_name={user.workout_name} key={index} name={user.name} workout={user.workout} calories={user.burnedCalories} image={user.img}/>
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default UserList;
