import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Header/Logo.png'
// import gameIcon from '../assets/Header/ion_game-controller.png'

const Header = () => {
  return (
    <header className='header'>
        <img src={Logo} alt="Logo" className='header-logo' />
        <nav className='navBar'>
            <ul className='navLinks'>
                <li><Link to={"/"}>Home</Link>
                {/* <img src={gameIcon} alt="gameicon" />
                </li> */} </li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to = {'/gameUnfold'}>Game Unfold</Link></li>
                <li><Link to={'/announcements'}>Announcements</Link></li>
                <li><Link to={'/finances'}>Finances</Link></li>
            </ul>
            <div>
                <Link to={'/contact'} className='contactBtn'>Contact Us</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header


