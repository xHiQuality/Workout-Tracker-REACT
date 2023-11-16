// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// let name = "Chris"
// const array = [0, 1, 2, 3, 4]

// const listItems = array.map(product =>
//   <li key={product}>
//     "Hello"
//   </li>
// );


// const news = array.map(p => 
//   <li>
//     {"P: " + p}
//   </li>
//   )


// function App() {
//   let [count, setCount] = useState(0);
//   let [message, setMessage] = useState("Default");


//   function Clicked() {
//       setCount(count + 1)
//       alert("Clicked " + count + " times")
//   }

//   function UpdateName(event) {
//     event.preventDefault();
//     const newMessage = event.target.elements.Message.value;
//     setMessage(newMessage);
//   }
//   return (

//     <div>
//       <h1>This is the first header. Next is a button, this 
//         is all for {name}
//         <MyButton count = {count} onClick={Clicked}/>
//       </h1>
//       <form onSubmit={UpdateName}>
//     <label>
//       Message: {message}
//       <input type="text" name="Message" />
//     </label>
//       Second Message: {message}
//     <input type="submit" value="Submit" />
//   </form>
//       {news}
//     </div>

//   )
// }


// function MyButton({count, onClick}) {
//   return (
//     <button onClick={onClick}> 
//     Click me!
//     </button>
//   );
// }

// export default App;


// WorkoutPage.js
// WorkoutPage.js

import React, { useState } from 'react';
import './WorkoutPage.css'; // Import your CSS file for styling

const WorkoutPage = () => {
  const [url, setUrl] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, toggle the login state
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div className="workout-page">
      <div className="header">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </div>

      <div className="main-content">
        <div className="logo-card">
          <h1>Fitness Plus</h1>
        </div>

        <div className="workout-cards">
          {/* Existing Cards */}
          <div className="workout-card">Card 1</div>
          <div className="workout-card">Card 2</div>
          <div className="workout-card">Card 3</div>
          </div>
          {/* New Cards */}
          <div className='workout-cards'>
          <div className="workout-card">Card 4</div>
          <div className="workout-card">Card 5</div>
          <div className="workout-card">Card 6</div>
          </div>
        </div>
      </div>
   
  );
};


export default WorkoutPage;