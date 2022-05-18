import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () =>{
    return(
        <nav className="container-fluid navbar">
        <Link to="/login" className="navTab">Login</Link>
        <Link to="/signup" className="navTab">signUp</Link>

        </nav>
    )
}
export default Navbar;