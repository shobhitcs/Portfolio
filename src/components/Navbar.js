import { NavLink } from "react-router-dom";

// import {NavLink} from 'react-router-dom'
const Navbar = () => {

   
        const hamburg_open=()=>{
            const phn_navbar=document.querySelector(".nav-items")
            phn_navbar.classList.toggle("active-nav");
        }
        const navclose=()=>{
            const phn_navbar=document.querySelector(".nav-items")
            if(phn_navbar.classList.contains("active-nav")){
                hamburg_open();
            }
        }
    return (
        <nav className="navbar">
            <di className="logo"></di>
            <div className="hamburg-open" onClick={()=>{hamburg_open()}}><ion-icon name="menu"></ion-icon></div>
            <div className="nav-items">
                <li style={{'animation-delay':'0.2s'}}>
                    <NavLink onClick={()=>{navclose()}} to="/" >Home</NavLink>
                </li>
                <li style={{'animation-delay':'0.4s'}}>
                    <NavLink onClick={()=>{navclose()}} to="about" >About</NavLink>
                </li>
                <li style={{'animation-delay':'0.6s'}}>
                    <NavLink onClick={()=>{navclose()}} to="projects" >Projects</NavLink>
                </li>
                <li style={{'animation-delay':'0.8s'}}>
                    <NavLink onClick={()=>{navclose()}} to="contact" >Contact</NavLink>
                </li>
                <li className="hamcly">
                <div className="hamburg-close" onClick={()=>{hamburg_open()}}><ion-icon name="close-outline"></ion-icon></div>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;