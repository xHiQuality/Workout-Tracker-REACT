import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Food.css'; // Make sure to import your CSS file
import axios from 'axios';
import './Card.css'

const Food = (props) => {
  // console.log(props.mealImage)
  // console.log('ID is : ');
  // console.log(props.id);

  const navigate = useNavigate();
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4000/api/foods/${props.id}`)
      .then((res) => {
        navigate('/user-auth');
      })
      .catch((err) => {
        console.log("Error from Food Delete click");
      });
  };
 
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src= {props.mealImage}
        className="card-image"
      />
{/* https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww */}
      <Card.Body>
        <li key={props.id} className="user-item">
          <Card.Title>Food: {props.name}</Card.Title>
          <Card.Text>
            <h3>Meal: {props.meal}</h3>
            <h3>Calories: {props.calories}</h3>
            <h3>{props.img}</h3>

            {window.location.pathname === '/user-auth' && (
              <div className="button-container">
                <Button type="submit" id="edit" className="edit-button">
                    <Link to={"editMeal"} style={{ textDecoration: 'none'}}>
                      Edit
                    </Link>
                  </Button>
          
                  <button onClick={() => { deleteHandler(props.id)}} type="submit" id="delete" className="delete-button">
                    Delete
                  </button>
              </div>
            )}
          </Card.Text>
        </li>
      </Card.Body>
    </Card>
  );
};

export default Food;
