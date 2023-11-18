import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UserList from './components/UsersList';


function App() {
  const [users, setUsers] = useState([]);


  // Handler function to add a new user to the list
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <Hdr />
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    
    
    </div>
  );
}

export default App;
