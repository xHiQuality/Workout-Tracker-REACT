import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';
import Workout from './components/Workout_Section/Workout.js'
import './WorkoutPage.css'; // Import your CSS file for styling
import Summary from './components/Summary.js';
import Hdr from './components/Hdr.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import Navbar from './components/Navbar.js';
import Header from './components/Header.js'


function App() {

  const DUMMY_ITEMS = [
      // Create and render default array with dummy items
      {
        id: 'u1',
        meal: 'breakfast',
        calories: '180',
        workout: 'legs',
        burnedCalories: '300'
      },
      {
        id: 'u2',
        meal: 'lunch',
        calories: '1180',
        workout: 'arms',
        burnedCalories: '150'
      },
      {
        id: 'u3',
        meal: 'dinner',
        calories: '1200',
        workout: 'push',
        burnedCalories: '270'
      }
  ]

  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(DUMMY_ITEMS);


  // Handler function to add a new user to the list
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  function ErrorPage () {
    return (
      <div>
        <h3>Error</h3>
        <p>Page not found.</p>
      </div>
    )
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
              <Hdr />
              <UserList users={users} /* This should be a dummy array of users initially */ />
            </React.Fragment>
          } />
          <Route path='/user-auth' element={
            <React.Fragment>
              <Header />
              <UserList users={users} />
              <AddUser onAddUser={addUserHandler} />
            </React.Fragment>
          } />
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  );

}

export default App;
