import { Link,useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="page_wrapper">
            <nav>                
                <ul>                    
                    <li>
                        <button className="rsvp" type="button">RSVP HERE</button>
                        {/*<Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>
                        <Link to="/">Home</Link>*/}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;