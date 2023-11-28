import React from 'react';
import './Login.css';
import Card from './Card';
import Button from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login displayed');
    }

    return (
        <Card className='input'>
            <h1>Log In</h1>
            <form onSubmit={submitHandler}>
                <input
                    placeholder='Username'
                    name="username"
                    type="text"
                /> 
                <input
                    placeholder='Password'
                    name="password"
                    type="password"
                />
                <Button type="submit">
                    <Link to="/user-auth">Login</Link> 
                </Button>
            </form>
            <p>Don't have an account?</p>
            <Button type="submit">
                <Link to="/signup">Sign Up</Link>
            </Button>
        </Card>
        
    );
}

export default Login;