import React from 'react'
import logo from "../logo.svg"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <div className="brand-name">
        <Link to="/">
            <img src={logo} alt="The cocktail" />
        </Link>
        </div>
        <ul className="links">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar