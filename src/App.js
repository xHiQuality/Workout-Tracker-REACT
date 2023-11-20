import React, { useState } from 'react';
import Workout from './components/Workout_Section/Workout.js'
import './WorkoutPage.css'; // Import your CSS file for styling
import Summary from './components/Summary.js';
import Header from './components/Header.js';
import Login from './components/Login.js';

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

      <div>
        <Login/>
        <Summary/>
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
        <Workout />
      </div>
    
  );
};

// function App() {
//   return (
//     <div>
//       <Header />
//       <Summary/>
//     </div>
//   );
// }

export default WorkoutPage;
// export default App;
