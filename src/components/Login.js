import React, { useState, useContext } from 'react';
// import './Login.css';
// import Card from './Card';
// import Button from './Button';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
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
            const loginUser = {email, password};
            const loginRes = await axios.post("http://localhost:4000/api/users/login", loginUser);
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            navigate('/user-auth');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }

    }

    // return (
    //     <Card className="input">
    //         <h1>Log In</h1>
    //         {error && <Alert variant="danger">{error}</Alert>}
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 placeholder='email@email.com'
    //                 name="email"
    //                 type="text"
    //                 required onChange={e => setEmail(e.target.value)}
    //             /> 
    //             <input
    //                 placeholder='Password'
    //                 name="password"
    //                 type="password"
    //                 required onChange={e => setPassword(e.target.value)}
    //             />
    //             <Button disabled={loading} type="submit">
    //                 <Link to="/user-auth">Login</Link> 
    //             </Button>
    //         </form>
    //         <p>Don't have an account?</p>
    //         <Button type="submit">
    //             <Link to="/signup">Sign Up</Link>
    //         </Button>
    //     </Card>
        
    // );

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ width: "100%", textAlign: "center"}}>
                <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group id="password" style={{ padding: "5px"}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-2" type="submit">
                                Log In
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">Don't have an account?<Link to="/signup">Sign Up</Link></div>
                </>
            </div>
        </Container>
    );

}

export default Login;