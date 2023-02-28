import { NavLink } from "react-router-dom";

// import {NavLink} from 'react-router-dom'
const Navbar = () => {

   
        const hamburg_open=()=>{
            const phn_navbar=document.querySelector(".nav-items")
            phn_navbar.classList.toggle("active-nav");
        }
        
    
    return (
        <nav className="navbar">
            <di className="logo">shobhit.cs</di>
            <div className="hamburg-open" onClick={()=>{hamburg_open()}}><ion-icon name="menu"></ion-icon></div>
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
                <li className="hamcly">
                <div className="hamburg-close" onClick={()=>{hamburg_open()}}><ion-icon name="close-outline"></ion-icon></div>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;