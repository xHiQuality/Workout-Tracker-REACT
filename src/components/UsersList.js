import React from 'react';
import './UsersList.css';
import Food from './Food';
import Workout from './Workout';
import Card from './Card';
import Image from './Image';
import MealImage from './MealImage';

function UserList({ users }) {
 const foodUsers = users.filter((user) => user.meal !== user.calories);
 const workoutUsers = users.filter((user) => user.workout !== user.burnedCalories);

 return (
    <div className="userlist">
      <div className="grid-container">
        {foodUsers.length > 0 && (
          <div className="grid-item">
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
          </div>
        )}

        {workoutUsers.length > 0 && (
          <div className="grid-item">
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
          </div>
        )}
      </div>
    </div>
 );
}

export default UserList;