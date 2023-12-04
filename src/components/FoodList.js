import React from 'react';
import Food from './Food';
import { Card } from 'react-bootstrap';
import './UsersList.css';

function FoodList({ users }) {
  const foodUsers = users.filter((user) => user.meal !== user.calories);

  return (
    <div className="userlist">
      <div className="grid-container">
        {foodUsers.length > 0 && (
          <Card className="user-card">
            <Card.Body>
              <h2>Food Information:</h2>
              {foodUsers.map((user, index) => (
                <Food id={user._id} name={user.name} meal={user.meal} calories={user.calories} mealImage={user.img} />
              ))}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default FoodList;
