import { NavLink } from "react-router-dom";

// import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <di className="logo">shobhit.cs</di>
            <div className="nav-items">
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" >Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
                {/* <NavLink to='/'>Home</NavLink> */}
            </div>
        </nav>
    );
}

export default Navbar;