import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Food.css'; // Make sure to import your CSS file
import axios from 'axios';
import EditFormMeal from './EditFormMeal';
import './Card.css'

const Food = (props) => {
 
  const [isFormVisible,setIsFormVisible] = useState(false)

  const showFormHandler = () => {
    setIsFormVisible(true)
  }

  const closeFormHandler = () => {
    setIsFormVisible(false)
  }

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
      window.location.reload()
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
                
                <button type="submit" className="edit-button" onClick={showFormHandler}>Edit</button>
          
                <button onClick={() => { deleteHandler(props.id)}} type="submit" id="delete" className="delete-button">
                    Delete
                </button>
              </div>
            )}
          </Card.Text>
        </li>
      </Card.Body>

      {isFormVisible && <EditFormMeal id={props.id} name={props.name} meal={props.meal} calories={props.calories} img={props.img}/>}        
      {isFormVisible && <button id="go-back" onClick={closeFormHandler}>Go Back</button>}
    </Card>
  );
};

export default Food;
