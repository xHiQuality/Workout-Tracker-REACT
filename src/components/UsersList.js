import React from 'react';
import Food from './Food';
import Image from './Image';
import MealImage from './MealImage';
import Workout from '../Workout';
import Card from './Card';

function UserList({ users }) {
  const foodUsers = users.filter((user) => user.meal !== user.calories);
  const workoutUsers = users.filter((user) => user.workout !== user.burnedCalories);

  return (
    <div className = "userlist">

{/* {imageUsers.length > 0 && (
        <Card className="user-card">
          <div>
            <h2>Image:</h2>
            <ul>
              {imageUsers.map((user, index) => (
                <li key={index}>
                  <Image image = {user.image} />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )} */}

      {foodUsers.length > 0 && (
        <Card className="user-card">
          <div>
            <h2>Food Information:</h2>
            <ul>
              {foodUsers.map((user, index) => (
                <li key={index}>
                  <Food name={user.name} meal={user.meal} calories={user.calories} />
                  <li key={index}>
                  <MealImage mealImage = {user.mealImage} />
                </li>
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
                  <Workout name={user.name} workout={user.workout} calories={user.burnedCalories} />
                  <li key={index}>
                  <Image image = {user.image} />
                </li>
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