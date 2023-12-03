import React, { useEffect, useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';
import Hdr from './components/Hdr.js';
import './components/WorkoutPage.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import Navbar from './components/Navbar.js';
import Header from './components/Header.js'
import Signup from './components/Signup.js'
import Header2 from './components/Header2.js'
import './App.css';
import Button from './components/Button.js';
import UserContext from './context/UserContext.js';
import axios from 'axios';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import { Nav } from 'react-bootstrap';
import AddExercise from './components/AddExercise.js';
import AddFood from './components/AddFood.js';
import WorkoutList from './components/WorkoutList.js';

function App() {

  const DUMMY_ITEMS = [
      // Create and render default array with dummy items
      {
        id: 'u1',
        meal: 'breakfast',
        calories: '180',
        workout: 'legs',
        burnedCalories: '300',
        mealImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww',
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 'u2',
        meal: 'lunch',
        calories: '1180',
        workout: 'arms',
        burnedCalories: '150',
        mealImage: 'https://plus.unsplash.com/premium_photo-1675453377179-22d446fe10ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGx1bmNofGVufDB8fDB8fHww',
        image: 'https://images.unsplash.com/photo-1620188526357-ff08e03da266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVsbHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 'u3',
        meal: 'dinner',
        calories: '1200',
        workout: 'push',
        burnedCalories: '270',
        mealImage: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D',
        image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D'
      }
  ]

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

  /** Delete after testing */
  function ButtonLink () {
    return (
      <div>
        <h3>Button Clicked</h3>
      </div>
    )
  }

  //User authentication
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:4000/tokenIsValid",
        null,
        { headers: { "x-auth-token": token }}
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

   // const [users, setUsers] = useState([]);
   const [users, setUsers] = useState(DUMMY_ITEMS);
  //  const [foods, setFoods] = useState([]);
  //  const [exercises, setExercises] = useState([]);
  //  useEffect(() => {
  //    axios
  //      .get('http://localhost:4000/api/foods')
  //      .then((res) => {
  //        setFoods(res.data);
  //      })
  //      .catch((err) => {
  //        console.log(err)
  //      });
  // });
  // useEffect(() => {
  //    axios
  //      .get('http://localhost:4000/api/exercises')
  //      .then((res) => {
  //        setExercises(res.data);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      })
  //  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
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
              <AddExercise />
              <AddFood />
              {/* <AddUser onAddUser={addUserHandler} /> */}
              {/* Add calorie counter here */}
              {/* <strong>ADDING CALORIES COUNTER HERE</strong> */}
              <UserList users={users} />
              {/* <WorkoutList users={exercises} /> */}
            </React.Fragment>
          } />
          <Route path='/login' element={
            <React.Fragment>
              <Header2 />
              <Login />
            </React.Fragment>
            }
          />
          <Route path='/signup' element={
            <React.Fragment>
              <Header2 />
              <Signup />
            </React.Fragment>
          } />
          /** Delete after testing of edit/delete button complete */
          <Route path='/user-auth/edit' element={<ButtonLink type = 'Edit'/>} />
          <Route path='/user-auth/delete' element={<ButtonLink type = 'Delete'/>} />
          /** End of Delete after testing */
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );

}

export default App;
