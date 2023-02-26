import { NavLink } from "react-router-dom";

// import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <di className="logo">shobhit.cs</di>
            <div className="nav-items">
                <li style={{'animation-delay':'0.2s'}}>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li style={{'animation-delay':'0.4s'}}>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li style={{'animation-delay':'0.6s'}}>
                    <NavLink to="/projects" >Projects</NavLink>
                </li>
                <li style={{'animation-delay':'0.8s'}}>
                    <NavLink to="/contact" >Contact</NavLink>
                </li>
                {/* <NavLink to='/'>Home</NavLink> */}
            </div>
        </nav>
    );
}

export default Navbar;