import './Header.css'
import { Link } from 'react-router-dom';

const header = () => {
    return ( 
        <div className='main-menu'>
            <div className='container'>
                <Link to='/gamestart'>
                    <button className='playGame' >Play Game</button>
                </Link>
                <Link to='/addquestions'>
                    <button className='addQs'>Add Questions</button>
                </Link>
            </div>
        </div>
     );
}

export default header