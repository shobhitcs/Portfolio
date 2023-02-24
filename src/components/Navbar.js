// import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <di className="logo">Portfolio.</di>
            <div className="nav-items">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                {/* <NavLink to='/'>Home</NavLink> */}
            </div>
        </nav>
    );
}

export default Navbar;