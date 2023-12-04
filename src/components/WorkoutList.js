
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
                <Workout key={index} id={user._id} name={user.name} workout={user.workout} calories={user.calories} img={user.img}/>
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default WorkoutList;
