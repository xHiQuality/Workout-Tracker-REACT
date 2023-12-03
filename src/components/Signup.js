import React, { useState, useContext } from 'react';
// import './Login.css'
// import Button from './Button';
// import Card from './Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, Form, Button, Card, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';

const Signup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [username, setUsername] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log('Login displayed');
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const newUser = {email, password, confirmPassword, username};

            await axios.post("http://localhost:4000/api/users/signup", newUser);
            const loginRes = await axios.post("http://localhost:4000/api/users/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            setLoading(false);
            navigate('/user-auth');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    // return (
    //     <Card className="input">
    //         <h1>Sign Up</h1>
    //         {error && <Alert variant="danger">{error}</Alert>}
    //         <form onSubmit={handleSubmit}>
    //             <input 
    //                 placeholder='email@email.com'
    //                 name="email"
    //                 type="email"
    //                 required="true"
    //                 onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <input
    //                 placeholder='Username'
    //                 name="username"
    //                 type="name"
    //                 required="true"
    //                 onChange={(e) => setUsername(e.target.value)}
    //             /> 
    //             <input
    //                 placeholder='Password'
    //                 name="password"
    //                 type="password"
    //                 required="true"
    //                 onChange={(e) => setPassword(e.target.value)}
    //             />
    //             <input 
    //                 placeholder='Confirm Password'
    //                 name="password-confirm"
    //                 type="password"
    //                 required="true"
    //                 onChange={(e) => setConfirmPassword(e.target.value)}
    //             />
    //             <Button disabled={loading} type="submit">
    //                 <Link to="/user-auth">Sign Up</Link> 
    //             </Button>
    //         </form>
    //         <p>Already have an account?</p>
    //         <Button type="submit">
    //             <Link to="/">Login</Link>
    //         </Button>
    //     </Card>
        
    // );

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="name"
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        required
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-2" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account?<Link to="/login">Log In</Link>
                    </div>
                </>
            </div>
        </Container>
    );
}

export default Signup;