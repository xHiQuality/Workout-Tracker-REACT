import React, { useEffect, useState } from 'react';
import UserList from './components/UsersList';
import Hdr from './components/Hdr.js';
import './components/WorkoutPage.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import Navbar from './components/Navbar.js';
import Header from './components/Header.js'
import Signup from './components/Signup.js'
import Header2 from './components/Header2.js'
import './App.css';
import UserContext from './context/UserContext.js';
import axios from 'axios';
import Login from './components/Login.js';
import AddExercise from './components/AddExercise.js';
import AddFood from './components/AddFood.js';
import WorkoutList from './components/WorkoutList.js';
import FoodList from './components/FoodList.js';
import EditFormExercise from './components/EditFormExercise.js';
import EditFormMeal from './components/EditFormMeal.js';
import { Link } from 'react-router-dom';
import './components/Button.css'
import Card from 'react-bootstrap/Card';

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
        img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 'u2',
        meal: 'lunch',
        calories: '1180',
        workout: 'arms',
        burnedCalories: '150',
        mealImage: 'https://plus.unsplash.com/premium_photo-1675453377179-22d446fe10ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGx1bmNofGVufDB8fDB8fHww',
        img: 'https://images.unsplash.com/photo-1620188526357-ff08e03da266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVsbHxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: 'u3',
        meal: 'dinner',
        calories: '1200',
        workout: 'push',
        burnedCalories: '270',
        mealImage: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D',
        img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D'
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
        <button className='button'><Link to="/">Go Back</Link></button>
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
        "http://localhost:4000/api/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token }}
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/api/users/", {
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
  const [foods, setFoods] = useState([]);
  const [exercises, setExercises] = useState([]);
  // For some reason, when you remove the second argument from useEffect, the page automatically updates when a get request
  // is sent, but the login no longer works, it holds indefinitely. However, when only one useEffect is there and it has no 
  // second argument, everything works as intended (minus items of the useEffect that is not used)
  useEffect(() => {
     axios
       .get('http://localhost:4000/api/foods')
       .then((res) => {
         setFoods(res.data);
       })
       .catch((err) => {
         console.log(err)
       });
  }, []);
  
  useEffect(() => {
     axios
       .get('http://localhost:4000/api/exercises')
       .then((res) => {
         setExercises(res.data);
       })
       .catch((err) => {
         console.log(err);
       })
   }, []);

   //Trying to figure out problem

  // const urls = [
  //   "http://localhost:4000/api/exercises",
  //   "http://localhost:4000/api/foods"
  // ]
  // useEffect(() => {
  //   const requests = urls.map((url) => axios.get(url));
  //   axios.all(requests).then((responses) => {
  //     responses.forEach((resp) => {
  //       setExercises(resp.data);
  //       let msg = {
  //         server: resp.headers.server,
  //         status: resp.status,
  //         fields: Object.keys(resp.data).toString(),
  //       };
  //       console.info(resp.config.url);
  //       console.table(msg);
  //     });
  //   })
  // });
  





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
              {/* <UserList users={users} /> */}
              <Card className="auth-card" >
                <WorkoutList users={exercises} />
                <FoodList users={foods} />
              </Card>
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
          <Route path='/user-auth/editMeal' element={<EditFormMeal />} />
          <Route path='/user-auth/editExercise' element ={<EditFormExercise />} />
          /** End of Delete after testing */
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );

}

export default App;
