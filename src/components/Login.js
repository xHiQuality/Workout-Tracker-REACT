import React from 'react';
import './Login.css'
import Button from './Button';
import { useState } from 'react';

const Login = ({onLogin}) => {
    return (
        <div className='login'>
            <h1>Log In</h1>
            <form>
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
                <Button type="submit">Login</Button>
            </form>
            <p>Don't have an account?</p>
            <Button type="submit">Sign Up</Button>
        </div>
        
    );
}

export default Login;