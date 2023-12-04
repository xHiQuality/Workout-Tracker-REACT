// /* Example Navbar using route links 
//     This is currently not being used in App.js.
// */

// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';

// const Navbar = () => {

//     const [token, setToken] = useState();

//     useEffect(() => {
//         setToken(localStorage.getItem("auth-token"));
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.clear();
//         if (token) {
//             setToken(false);
//         }
//     }

//     if (!token) {
//         return (
//             <div>
//                 <h1>Workout Tracker +</h1>
//                 <Button type="submit">
//                     <Link to="/login">Log In</Link>
//                 </Button>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//               <h1>Workout Tracker ----</h1>
//               <Button type="submit" variant="danger" onClick={handleSubmit}>
//                   <Link to="/">Log Out</Link>
//               </Button>
//             </div>
//       );    
//     }
// }

// export default Navbar;