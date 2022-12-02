import React, {useEffect, useState} from 'react'
import logo from "../logo.svg"
import {Link} from "react-router-dom"
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md"

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleClick = () => {
        setIsDarkMode(!isDarkMode)
    }
    useEffect(() => {
        document.documentElement.classList.toggle("dark-mode")
    }, [isDarkMode])
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
            <li>
                <p onClick={handleClick} className='icons'>{isDarkMode? <MdOutlineDarkMode />: <MdDarkMode />}</p>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar