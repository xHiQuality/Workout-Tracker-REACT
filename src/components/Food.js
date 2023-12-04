// // import React from 'react';
// // import Card from 'react-bootstrap/Card';
// // import Button from 'react-bootstrap/Button';

// // const Food = (props) => {
// //   return (
// //     <Card style={{ width: '18rem', border: '2px solid black', height: 'auto' }}>
// //       <Card.Img
// //         variant="top"
// //         src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww"
// //         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //       />

// //       <Card.Body>
// //         <li key={props.id} className="user-item">
// //           <Card.Title>Food:</Card.Title>
// //           <Card.Text>
// //             <h3>Name: {props.name}</h3>
// //             <h3>Meal: {props.meal}</h3>
// //             <h3>Calories: {props.calories}</h3>
// //             <Button variant="primary">Delete</Button>
// //           </Card.Text>
// //         </li>
// //       </Card.Body>
// //     </Card>
// //   );
// // };

// // export default Food;

// // Food.js// Food.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import './Food.css'; // Make sure to import your CSS file

// const Food = (props) => {
//   return (
//     <Card className="custom-card">
//       <Card.Img
//         variant="top"
//         src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww"
//         className="card-image"
//       />

//       <Card.Body>
//         <li key={props.id} className="user-item">
//           <Card.Title>Food:</Card.Title>
//           <Card.Text>
//             <h3>Name: {props.name}</h3>
//             <h3>Meal: {props.meal}</h3>
//             <h3>Calories: {props.calories}</h3>
//             {window.location.pathname === '/user-auth' && (
//                 <Link to ='/*'>
//                     <Button type = 'submit' id = 'edit'>
//                         Edit
//                     </Button>
//                 </Link>
//             )}
//             {window.location.pathname === '/user-auth' && (
//                 <Link to ='/*'>
//                     <Button type = 'submit' id = 'delete' variant='primary'>
//                         Delete
//                     </Button>
//                 </Link>
//             )}
//           </Card.Text>
//         </li>
// {/* >>>>>>> fc8f55e23d5af422b1b61f8cd3f2fb80a34aaa40 */}
//       </Card.Body>
//     </Card>
//   );
// };

// export default Food;

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Food.css'; // Make sure to import your CSS file

const Food = (props) => {
  // console.log(props.mealImage)
 
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
          <Card.Title>Food</Card.Title>
          <Card.Text>
            <h3>Name: {props.name}</h3>
            <h3>Meal: {props.meal}</h3>
            <h3>Calories: {props.calories}</h3>
            <h3>{props.img}</h3>

            {window.location.pathname === '/user-auth' && (
              <div className="button-container">
                <Button type="submit" id="edit" className="edit-button">
                    <Link to={"edit"} style={{ textDecoration: 'none'}}>
                      Edit
                    </Link>
                  </Button>
          
                  <Button type="submit" id="delete" className="delete-button">
                    <Link to={"delete"} className='link' style={{ textDecoration: 'none'}}>
                      Delete
                    </Link>
                  </Button>
              </div>
            )}
          </Card.Text>
        </li>
      </Card.Body>
    </Card>
  );
};

export default Food;
