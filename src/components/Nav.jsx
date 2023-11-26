import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className="nav"> 
        <Link to="/">
            <div>HOME</div>
        </Link>
        <Link to="/about">
            <div>ABOUT</div>
        </Link>
        <Link to="/nasa-list">
            <div>NASALIST</div>
        </Link>

        </div>
    )
}

export default Nav

