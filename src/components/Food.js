// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const Food = (props) => {
//   return (
//     <Card style={{ width: '18rem', border: '2px solid black', height: 'auto' }}>
//       <Card.Img
//         variant="top"
//         src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww"
//         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//       />

//       <Card.Body>
//         <li key={props.id} className="user-item">
//           <Card.Title>Food:</Card.Title>
//           <Card.Text>
//             <h3>Name: {props.name}</h3>
//             <h3>Meal: {props.meal}</h3>
//             <h3>Calories: {props.calories}</h3>
//             <Button variant="primary">Delete</Button>
//           </Card.Text>
//         </li>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Food;

// Food.js// Food.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Food.css'; // Make sure to import your CSS file

const Food = (props) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww"
        className="card-image"
      />

      <Card.Body className="card-body">
        <Card.Title>Food:</Card.Title>
        <Card.Text>
          <h3>Name: {props.name}</h3>
          <h3>Meal: {props.meal}</h3>
          <h3>Calories: {props.calories}</h3>
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Food;
