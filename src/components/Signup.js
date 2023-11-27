import React from 'react';
import './Login.css'
import Button from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login displayed');
    }

    return (
        <div className='login'>
            <h1>Sign Up</h1>
            <form onSubmit={submitHandler}>
                <input
                    placeholder='Username'
                    name="username"
                    type="text"
                /> 
                <input
                    placeholder='Password'
                    name="password"
                    type="text"
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