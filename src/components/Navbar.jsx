import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar(){
    return(
        <nav className="container">
            <Link to="/" className="class-website-name">Astrology </Link>
                <ul>
                    <li> 
                        <Link to="/about"> About </Link> 
                    </li>
                    <li> 
                        <Link to="/contact"> Contact </Link> 
                    </li>
                    <li> 
                       <button className='navbar-button'> <Link to="/login"> Login </Link>  </button>
                    </li>
                </ul>
        </nav>        
    );
}

export default Navbar