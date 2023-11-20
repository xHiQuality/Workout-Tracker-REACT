import React from 'react';
import Food from './Food';
import Workout from '../Workout';
import Card from './Card';

function UserList({ users }) {
  const foodUsers = users.filter((user) => user.meal !== user.calories);
  const workoutUsers = users.filter((user) => user.workout !== user.burnedCalories);

  return (
    <div>
      {foodUsers.length > 0 && (
        <Card className="user-card">
          <div>
            <h2>Food Information:</h2>
            <ul>
              {foodUsers.map((user, index) => (
                <li key={index}>
                  <Food meal={user.meal} calories={user.calories} />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {workoutUsers.length > 0 && (
        <Card className="user-card">
          <div>
            <h2>Workout Information:</h2>
            <ul>
              {workoutUsers.map((user, index) => (
                <li key={index}>
                  <Workout workout={user.workout} calories={user.burnedCalories} />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
}

export default UserList;