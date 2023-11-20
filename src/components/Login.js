import React from 'react';
import './Login.css'
import Button from './Button';
import { useState } from 'react';

const Login = ({onLogin}) => {

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
    }

    return (
        <div className='login'>
            <h1>Log In</h1>
            <form onSubmit={loginHandler}>
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
                    type="password"
                    value={password.password}
                    onChange={setPassword}
                />
                <Button type="submit">Login</Button>
            </form>
            <p>Don't have an account?</p>
            <Button type="submit">Sign Up</Button>
        </div>
        
    );
}

export default Login;