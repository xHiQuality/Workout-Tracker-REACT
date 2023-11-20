import './Header.css'
import Button from './Button';

const Header = () => {
      
    return (
      <div className="header">
       <h1>Fitness App</h1>
       <Button type="login">Login</Button>
      </div>
    );
  };

export default Header;