/* Example Navbar using route links 
    This is currently not being used in App.js.
*/

import { Link } from 'react-router-dom';
import Hdr from './Hdr';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Hdr />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="user-auth">New entry</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    );
}

export default Navbar;