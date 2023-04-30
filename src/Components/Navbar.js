import React from 'react'
import Logo from "../Images/Navlogo.png"

const Navbar = () => {
  return (
    <div className='navbar_root'>
    <div className="navbar_main">
        <div className="navbar_logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="navbar_links">
            <p className='active_link navbar_link'>Trade</p>
            <p className='navbar_link'>Earn</p>
            <p className='navbar_link'>Support</p>
            <p className='navbar_link'>About</p>
        </div>
        <button className='navBtn_wallet'>
            Connect wallet
        </button>
    </div>
    </div>
  )
}

export default Navbar