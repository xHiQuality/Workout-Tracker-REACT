import React from 'react';
import './Login.css'
import Button from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {

<<<<<<< HEAD
    const [isFormVisible, setIsFormVisible] = useState(false); // New state variable
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (event) => {
        event.preventDefault();

        const loggedInUser = {
            username: username,
            password: password
        }

        onLogin(loggedInUser);

        setUsername('');
        setPassword('');
        setIsFormVisible(false);

    }

    const showFormHandler = () => {
        setIsFormVisible(true)
=======
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login displayed');
>>>>>>> main
    }

    return (
        <div className='login'>
            <h1>Log In</h1>
<<<<<<< HEAD
            <form onSubmit={loginHandler}>
=======
            <form onSubmit={submitHandler}>
>>>>>>> main
                <input
                    placeholder='Username'
                    name="username"
                    type="text"
                    value={username.username}
                    onChange={setUsername}
                /> 
                <input
                    placeholder='Password'
                    name="password"
<<<<<<< HEAD
                    type="password"
                    value={password.password}
                    onChange={setPassword}
=======
                    type="text"
>>>>>>> main
                />
                <Button type="submit">
                    <Link to="/user-auth">Login</Link> 
                </Button>
            </form>
            <p>Don't have an account?</p>
            <Button type="submit">Sign Up</Button>
        </div>
        
    );
}

export default Login;