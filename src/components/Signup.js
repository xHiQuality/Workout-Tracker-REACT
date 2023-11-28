import React from 'react';
import './Login.css'
import Button from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Login = ({onLogin}) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login displayed');
    }

    return (
        <Card className='input'>
            <h1>Sign Up</h1>
            <form onSubmit={submitHandler}>
                <input 
                    placeholder='Email@email.com'
                    name="email"
                    type="text"
                />
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
                    <Link to="/user-auth">Sign Up</Link> 
                </Button>
            </form>
            <p>Already have an account?</p>
            <Button type="submit">
                <Link to="/">Login</Link>
            </Button>
        </Card>
        
    );
}

export default Login;