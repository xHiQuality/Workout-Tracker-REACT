import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';
import Workout from './components/Workout_Section/Workout.js'
import './WorkoutPage.css'; // Import your CSS file for styling
import Summary from './components/Summary.js';
import Hdr from './components/Hdr.js';


function App() {

  const DUMMY_ITEMS = [
      // Create and render default array with dummy items
  ]

  const [users, setUsers] = useState([]);


  // Handler function to add a new user to the list
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <Hdr />
      <Summary />
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    
    
    </div>
  );
}

export default App;
