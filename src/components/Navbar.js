/* Example Navbar using route links 
    This is currently not being used in App.js.
*/

import { Link } from 'react-router-dom';
import Hdr from './Hdr';
import UsersList from './UsersList'
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Navbar = () => {

    const [token, setToken] = useState();

    useEffect(() => {
        setToken(localStorage.getItem("auth-token"));
    }, []);

    if (!token) {
        return (
            <Navbar>
                <div className="hdr">
                    <h1>Workout Tracker +</h1>
                    <Button type="submit">
                        <Link to="/login">Log In</Link>
                    </Button>
                </div>
            </Navbar>
        );
    }

    return (
        <Navbar>
          <div>
            <h1>Workout Tracker +</h1>
            <Button type="submit">
                <Link to="/">Log Out</Link>
            </Button>
          </div>
        </Navbar>
    );
}

export default Navbar;