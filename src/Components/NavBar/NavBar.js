import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className='navBar'>
            <div className='logo'>
                <h1>Quiz App</h1>
                <p>By Ryan Malvyn.</p>
            </div>
            <div className='links'>
                <Link to='/'>Home</Link>
                <a href='https://github.com/ryan-malvyn'>More Projects</a>
            </div>      
        </div>
     );
}
 
export default NavBar;